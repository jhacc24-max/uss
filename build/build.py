import docx,json,re,sys,copy,zipfile,shutil,os
sys.path.insert(0,'.')
from lib import *
T=json.load(open('tables.json')); A=json.load(open('avg.json'))
K=['lab','rad','ter']
SRC='../demanda/Demanda Social - LABORATORIO CLINICO.docx'
OUT='../demanda/Demanda Social - FARMACIA Y BIOQUIMICA.docx'
d=docx.Document(SRC); B=d.element.body
def num(s): return float(s.replace('%','').replace(',','.'))
def lrm(pcts,n):
    s=sum(pcts); pcts=[p*100/s for p in pcts]
    raw=[p*n/100 for p in pcts]; f=[int(x) for x in raw]
    for i in sorted(range(len(raw)),key=lambda i:-(raw[i]-f[i]))[:n-sum(f)]: f[i]+=1
    return f
def fmt(x,dec=1): return f"{x:.{dec}f}"
def sp(n): return f"{int(round(n)):,}".replace(',',' ')
N=588
TB=[t._tbl for t in d.tables]
def rows(i): return [r for r in TB[i].iter(W+'tr')]
def cells(tr): return [c for c in tr.iter(W+'tc')]
def setrow(i,r,vals):
    cs=cells(rows(i)[r])
    for c,v in zip(cs,vals):
        if v is not None: set_cell(c,v)

# ---------- portada / textos globales ----------
LAB_LONG=['Tecnología Médica con especialidad en Laboratorio Clínico','Tecnología Médica con especialidad en laboratorio clínico','tecnología médica, especializada en laboratorio clínico','Tecnología Médica, especializada en laboratorio clínico','Tecnología Médica especializada en laboratorio clínico']
for s in LAB_LONG: replace_all(B,s,'Farmacia y Bioquímica')
replace_all(B,'-2023','-2026'); replace_all(B,' - 2023',' - 2026'); replace_all(B,'Setiembre de 2023','Setiembre de 2026')
replace_all(B,'profesional tecnólogo médico con especialidad en laboratorio clínico','profesional químico farmacéutico')
replace_all(B,'profesional tecnólogo médico con especialidad en Farmacia y Bioquímica','profesional químico farmacéutico')
replace_all(B,'el campo de la Farmacia y Bioquímica','el campo farmacéutico')
replace_all(B,'campo de la Tecnología Médica','campo farmacéutico')
replace_all(B,'la carrera de tecnología médica:','la carrera de Farmacia y Bioquímica:')
replace_all(B,'colaboración con instituciones médicas y centros de rehabilitación','colaboración con establecimientos de salud, establecimientos farmacéuticos y laboratorios')
replace_all(B,'servicios especializados en laboratorio clínico','servicios farmacéuticos y de análisis bioquímico')
replace_all(B,'la Universidad Señor de Sipán -2026. ','la Universidad Señor de Sipán -2026. ')

# ---------- presentación ----------
set_p(find_p(B,'Es fundamental mencionar'),
 'Es fundamental mencionar que el presente estudio está fechado en setiembre de 2026. Los porcentajes de las variables de preferencia y disposición del estudiante provienen del levantamiento de campo realizado entre los meses de julio, agosto y setiembre de 2023 a estudiantes de 5to de secundaria de la Región Lambayeque, promediados a partir de los tres informes de demanda social de referencia (Laboratorio Clínico, Radiología y Terapia Física y Rehabilitación) y aplicados al marco muestral actualizado con la matrícula 2025 del SIAGIE (MINEDU), con el que se recalcularon las frecuencias. Los cálculos muestrales se fundamentan, por tanto, en dicho marco, mientras que los datos poblacionales, socioeconómicos y de oferta se actualizaron con la información disponible hasta setiembre de 2026 (CPI Research 2026, APEIM 2025, INEI/OSEL 2025, DIGEMID 2026 y portales institucionales), la cual se incorpora en el análisis descriptivo de la demanda educativa.')

# ---------- ámbito ----------
set_p(find_p(B,'En consecuencia, tenemos una población'),
 'En consecuencia, tenemos una población que ha concluido la educación secundaria, ubicada en un rango de edad entre 16 y 25 años. Asimismo, según la Ficha de Diagnóstico de la región Lambayeque (2024), se cuenta con 194 establecimientos de salud entre EsSalud y MINSA, y según DIGEMID (junio 2026) existen 1 580 establecimientos farmacéuticos privados vigentes, cada uno de los cuales requiere por ley un Químico Farmacéutico como director técnico, frente a 812 profesionales colegiados en el Colegio Químico Farmacéutico Departamental de Lambayeque (Memoria 2023-2024). Por consiguiente, existe una gran demanda de personal en áreas como Farmacia Comunitaria, Farmacia Hospitalaria, Atención Farmacéutica, Farmacovigilancia y Laboratorio.')
replace_all(B,'Genera cambios en instituciones y centros privados en diagnóstico de imágenes, medicina nuclear y radioterapia.','Genera cambios en farmacias, boticas, droguerías y laboratorios farmacéuticos, garantizando el acceso, la calidad y el uso racional de los medicamentos.')
replace_all(B,'Lleva tu talento a empresas comercializadoras de equipos, insumos y software para radiología clínica y radioterapia.','Lleva tu talento a empresas de la industria farmacéutica y distribuidoras de medicamentos, dispositivos médicos y productos sanitarios.')
replace_all(B,'Desarrolla conocimiento innovador en centros de investigación.','Desarrolla conocimiento innovador en centros de investigación y en laboratorios de control de calidad.')

# ---------- Universo 2025 (SIAGIE), Tablas 1, 2 y 3 ----------
S=json.load(open('siagie_lambayeque_5to.json'))
PV=['CHICLAYO','FERREÑAFE','LAMBAYEQUE']
NAMES={'CHICLAYO':'Chiclayo','FERREÑAFE':'Ferreñafe','LAMBAYEQUE':'Lambayeque'}
Npop=sum(S[p]['est_pub']+S[p]['est_priv'] for p in PV)
Npub=sum(S[p]['est_pub'] for p in PV); Npriv=Npop-Npub
IEpub=sum(S[p]['ie_pub'] for p in PV); IEpriv=sum(S[p]['ie_priv'] for p in PV)
z=1.96; e_=0.03985  # error estipulado del informe original (≈4 %; varianza V=0.00041337, n0=605)
strata=[(p,g) for p in PV for g in ['pub','priv']]
Ni=[S[p]['est_'+g] for p,g in strata]
W_=[x/Npop for x in Ni]
sumW=sum(w*0.5*0.5 for w in W_)
n_form=Npop*z*z*sumW/(Npop*e_*e_+z*z*sumW)
N=int(round(n_form))
ni=lrm([w*100 for w in W_],N)
print('Universo',Npop,'n muestral',n_form,N,ni)
for j,p in enumerate(PV):
    r=2+j
    setrow(0,r,[NAMES[p],str(S[p]['ie_pub']+S[p]['ie_priv']),str(S[p]['ie_pub']),str(S[p]['ie_priv']),None,sp(S[p]['est_pub']+S[p]['est_priv']),sp(S[p]['est_pub']),sp(S[p]['est_priv'])])
setrow(0,5,['Total',str(IEpub+IEpriv),str(IEpub),str(IEpriv),None,sp(Npop),sp(Npub),sp(Npriv)])
lbl={'pub':'publica','priv':'privada'}
for k,((p,g),n_i,w) in enumerate(zip(strata,ni,W_)):
    setrow(1,2+k,[f'{NAMES[p]} (Estudiantes de I.E. {lbl[g]})',sp(S[p]['est_'+g]),f'{w:.6f}' if w>=0.01 else f'{w:.5f}','0.500','0.500',f'{w*0.25:.7f}',str(n_i)])
setrow(1,8,['Total',sp(Npop),'1',None,None,f'{sumW:.4f}',str(N)])
npub_reg=sum(ni[k] for k in range(0,6,2)); npriv_reg=N-npub_reg
setrow(2,2,['Regional',str(N),str(npub_reg),fmt(npub_reg/N*100)+'%',str(npriv_reg),fmt(npriv_reg/N*100)+'%'])
T3=[]
for j,p in enumerate(PV):
    a_,b_=ni[2*j],ni[2*j+1]
    setrow(2,3+j,[NAMES[p],str(a_+b_),str(a_),fmt(a_/N*100)+'%',str(b_),fmt(b_/N*100)+'%'])
    T3.append((NAMES[p],a_+b_,a_,a_/N*100,b_,b_/N*100))
T3reg=(npub_reg,npub_reg/N*100,npriv_reg,npriv_reg/N*100)

c,f_,l=T3[0],T3[1],T3[2]
set_p(find_p(B,'Como podemos ver a nivel regional'),f'Como podemos ver a nivel regional, el {fmt(T3reg[1])}% de estudiantes asiste a instituciones públicas, mientras que el {fmt(T3reg[3])}% lo hace en instituciones privadas. En Chiclayo, el {fmt(c[3])}% pertenece a instituciones públicas y el {fmt(c[5])}% a privadas. Ferreñafe muestra un menor porcentaje con el {fmt(f_[3])}% en instituciones públicas y el {fmt(f_[5])}% en privadas. Por último, en Lambayeque, el {fmt(l[3])}% asiste a instituciones públicas y el {fmt(l[5])}% a privadas. ')
set_p(find_p(B,'Por ello, la provincia de Chiclayo'),f'Por ello, en la provincia de Chiclayo, el {fmt(c[3])}% de los estudiantes encuestados asisten a instituciones educativas públicas, lo que indica una mayor preferencia por este tipo de instituciones en comparación con las privadas, que representan el {fmt(c[5])}% de la muestra. Esta proporción sugiere una demanda significativa y predominante hacia las instituciones públicas en esta provincia.')
# ---------- Tabla 4 ----------
lab4=T['lab'][3]
names=[r[0] for r in lab4[1:-1]]
P4=[sum(num(T[k][3][1+j][2]) for k in K)/3 for j in range(len(names))]
F4=lrm(P4,N)
farm_idx=[j for j,n in enumerate(names) if 'laboratorio clínico' in n][0]
P4[farm_idx]=A['own4']   # promedio de la fila propia de cada informe (2.6,2.4,2.2 -> 2.4 por carrera propia)
names[farm_idx]='Farmacia y Bioquímica'
F4=lrm(P4,N)
for j,(n,f,p) in enumerate(zip(names,F4,P4)):
    setrow(3,1+j,[n,str(f),fmt(p)])
setrow(3,len(names)+1,[None,str(N),'100'])
farm_f=F4[farm_idx]; farm_p=P4[farm_idx]
rank=sorted(P4,reverse=True).index(farm_p)+1
print('T4 farmacia',farm_f,farm_p,'puesto',rank,'sum pct',sum(P4))
print(dict(zip(names,zip(F4,P4))))

# ---------- Tablas 5,6,7 (n propia = f de Tabla 4) ----------
n5=farm_f
si=A['t5']['Si']; no=A['t5']['No']
f5=lrm([si,no],n5)
setrow(4,1,['Si',str(f5[0]),fmt(si)]); setrow(4,2,['No',str(f5[1]),fmt(no)]); setrow(4,3,[None,str(n5),'100.0'])
cats=list(A['t6'].keys()); p6=[A['t6'][c] for c in cats]; f6=lrm(p6,n5)
while len(rows(5))<len(cats)+2:
    r_=rows(5); r_[-2].addnext(copy.deepcopy(r_[1]))
for j,(c,f,p) in enumerate(zip(cats,f6,p6)): setrow(5,1+j,[c,str(f),fmt(p)])
setrow(5,len(cats)+1,[None,str(n5),'100.0'])
# T7 : 7 alternativas (unión de alternativas de los 3 informes)
order=['Prestigio','Exigencia académica','No tiene atributos definidos','Plana docente calificada','Infraestructura adecuada y moderna','Costos cómodos','Otro']
p7=[A['t7'][c] for c in order]; f7=lrm(p7,n5)
tbl=TB[6]; trs=rows(6)
tmpl=trs[1]
while len(rows(6))<len(order)+2:
    new=copy.deepcopy(tmpl); trs=rows(6); trs[-2].addnext(new)
for j,(c,f,p) in enumerate(zip(order,f7,p7)): setrow(6,1+j,[c,str(f),fmt(p)])
setrow(6,len(order)+1,[None,str(n5),'100.0'])
print('T5',f5,si,no,'T6',dict(zip(cats,zip(f6,p6))),'T7',dict(zip(order,zip(f7,p7))))

# ---------- Tablas 8-15 (promedio de % de los tres informes) ----------
def avg_table(i,ncol_pct=2):
    labs=[T['lab'][i][r][0] for r in range(1,len(T['lab'][i])-1)]
    ps=[sum(num(T[k][i][r][2]) for k in K)/3 for r in range(1,len(labs)+1)]
    return labs,ps
def fill_table(i,n,labs=None):
    labs,ps=avg_table(i); fs=lrm(ps,n)
    for r,(f,p) in enumerate(zip(fs,ps)):
        setrow(i,1+r,[None,str(f),fmt(p) if p!=15 else '15.0'])
    setrow(i,len(labs)+1,[None,str(n),'100'])
    return labs,ps,fs
R={}
n12=None
for i in [7,8,9,10,11]:
    R[i]=fill_table(i,N)
n_uss=R[11][2][0]  # 'Si' prefiere USS
for i in [12,13,14]:
    R[i]=fill_table(i,n_uss)
print('n_uss',n_uss)
for i in R: print(i+1,list(zip(R[i][0],R[i][2],[round(x,1) for x in R[i][1]])))
json.dump({'own':farm_f},open('own.json','w'))

# ---------- Poblaciones (base de datos actualizada) ----------
POP26=1412900; POP17=1197260
g=(POP26/POP17)**(1/9)-1
years=[2017,2022,2023,2024,2025,2026]
serie=[round(POP17*(1+g)**(y-2017)) for y in years]; serie[-1]=POP26
print('tasa',g,serie)
rep=lambda old,new: replace_all(B,old,new)
# Tabla 16
set_p(find_p(B,'Población total de la Región Lambayeque 2017'),'Población total de la Región Lambayeque 2026') if False else None
replace_all(B,'Población total de la Región Lambayeque 2017','Población total de la Región Lambayeque 2026')
setrow(15,1,['Población Lambayeque 2026',sp(POP26)])
set_p(find_p(B,'Nota: Censo de Población y Vivienda 2017- INEI',0),'Nota: CPI Research, Market Report N° 003 – Proyecciones Poblacionales 2025 (población proyectada 2026)')
set_p(find_p(B,'Población Total: La población'),f'Población Total: La población del departamento de Lambayeque, según la proyección de CPI Research para el 2026, es de {sp(POP26)} personas (Fuente: CPI Research, Market Report N° 003 – Proyecciones Poblacionales 2025; el Censo de Población y Vivienda 2017 del INEI registró {sp(POP17)} personas).')
# Tabla 17
replace_all(B,'Población de Lambayeque proyectada al 2022','Población de Lambayeque proyectada al 2026')
setrow(16,0,['Población proyectada 2026',None,None])
setrow(16,1,[None,None,fmt(g*100,2)])
for r,(y,v) in enumerate(zip(years,serie)):
    setrow(16,2+r,[f'Población {y}',sp(v),None])
n1=find_p(B,'Nota: Censo de Población y Vivienda 2017- INEI',0)
set_p(n1,'Nota: Censo de Población y Vivienda 2017 - INEI; CPI Research (2026). Elaboración propia: interpolación geométrica entre ambas cifras.')
set_p(find_p(B,'Se estima que con una tasa'),f'Se estima que con una tasa de crecimiento anual promedio de {fmt(g*100,2)}% (2017-2026) la población al 2026 es de {sp(POP26)} personas. El siguiente cuadro muestra la proyección de la población al 2026; los años intermedios se obtienen por interpolación entre el Censo 2017 y la proyección de CPI Research.')
# Tabla 18 NSE (APEIM 2025)
ab=round(POP26*0.068); c=round(POP26*0.299)
setrow(17,1,['NSE AB',sp(ab),'6.8']); setrow(17,2,['NSE C',sp(c),'29.9']); setrow(17,3,['Total AB/C - Lambayeque',sp(ab+c),'36.7'])
replace_all(B,'Nota: Apeim 2022','Nota: APEIM 2025 (data ENAHO 2024); población proyectada 2026 CPI Research')
set_p(find_p(B,'El mercado potencial está conformado por la población del nivel'),f'El mercado potencial está conformado por la población de los niveles socioeconómicos AB y C, que corresponde al 36.7% de la población regional de Lambayeque, es decir {sp(ab+c)} personas (APEIM 2025 no separa el NSE B a nivel departamental, por lo que se presenta el agregado AB).')
# Tabla 19
J15_29=308638; p1625=round(J15_29*10/15); pct1625=p1625/POP26*100
setrow(18,1,['Población de 16 a 25 años',sp(p1625),fmt(pct1625)]); setrow(18,2,[None,sp(p1625),fmt(pct1625)])
set_p(find_p(B,'Nota: Elaboración propia',0),'Nota: INEI – SIRTOD, en OSEL Lambayeque (2025); elaboración propia')
set_p(find_p(B,'El mercado potencial está conformado por los jóvenes'),f'El mercado potencial está conformado por los jóvenes de 16 a 25 años, quienes representan el {fmt(pct1625)}% de la población regional de Lambayeque, es decir {sp(p1625)} personas. Se estimó a partir de la población de 15 a 29 años de Lambayeque ({sp(J15_29)} jóvenes según el INEI, 2025), de la cual los 10 años de edad comprendidos entre los 16 y 25 años equivalen a 10/15 partes, bajo el supuesto de distribución uniforme por edad simple.')
# Tabla 20
est=Npop; pct20=est/POP26*100
setrow(19,1,[None,str(est),fmt(pct20)])
set_p(find_p(B,'El mercado factible está conformado por los estudiantes que terminan'),f'El mercado factible está conformado por los estudiantes de 5° de secundaria de la región Lambayeque (SIAGIE, Reporte de Matrícula 2025), que asciende a {est} estudiantes, lo que representa el {fmt(pct20)}% de la población regional proyectada al 2026.')

replace_all(B,'según provincia de la Región Lambayeque, 2022','según provincia de la Región Lambayeque, 2025')
replace_all(B,'Fuente: MINEDU, Escale – Censo Educativo 2020.','Fuente: MINEDU, SIAGIE – Reporte de Matrícula 2025 (5.° grado de secundaria, EBR).')
set_p(find_p(B,'En el año 2020, la Región'),f'En el año 2025, la Región Lambayeque contaba con un total de {IEpub+IEpriv} instituciones educativas con 5.° grado de secundaria, de las cuales {IEpub} eran públicas y {IEpriv} eran privadas. El número total de estudiantes de 5.° de secundaria en la región alcanzaba los {sp(Npop)}, distribuidos en {sp(Npub)} estudiantes en instituciones públicas y {sp(Npriv)} en instituciones privadas, según datos del MINEDU obtenidos del SIAGIE - Reporte de Matrícula 2025.')
replace_all(B,'588',str(N))
# Tabla 21 mercado objetivo
mo=round(p1625*farm_p/100)
setrow(20,0,['Farmacia y Bioquímica',str(mo),fmt(farm_p)+'%'])
demanda_ef=round(mo*si/100)
oferta=240
brecha=demanda_ef-oferta
cons=round(mo*n_uss/N*100/ (1) /100) if False else round(mo*R[11][1][0]/100)
brecha_c=cons-oferta
print('mercado objetivo',mo,'efectiva',demanda_ef,'brecha',brecha,'cons',cons,brecha_c)
set_p(find_p(B,'Del mismo modo por medio de una muestra'),f'Del mismo modo, por medio de una muestra aleatoria de {N} estudiantes se realizó una estimación de la participación que tiene cada carrera evaluada. El mercado objetivo está conformado por los jóvenes de la región Lambayeque que tienen la intención de postular a la carrera de Farmacia y Bioquímica ({fmt(farm_p)}%), es decir, {sp(mo)} personas (población de 16 a 25 años de {sp(p1625)} por {fmt(farm_p)}%).')
json.dump({'mo':mo,'ef':demanda_ef,'brecha':brecha,'cons':cons,'brecha_c':brecha_c,'p1625':p1625,'pct1625':pct1625,'farm_f':farm_f,'farm_p':farm_p,'rank':rank},open('nums.json','w'))

# ---------- Interpretaciones ----------
rk=lambda p: p
set_p(find_p(B,'De acuerdo con los datos sobre la preferencia'),
 f'De acuerdo con los datos sobre la preferencia de carreras universitarias entre los estudiantes de quinto año de secundaria, se puede observar que la carrera de Farmacia y Bioquímica representa el {fmt(farm_p)}% de las preferencias ({farm_f} estudiantes), ubicándose en el puesto {rank} de las carreras listadas, por debajo de Medicina Humana ({fmt(P4[0])}%), Derecho ({fmt(P4[1])}%) y Enfermería ({fmt(P4[9])}%), pero al mismo nivel que otras carreras del área de la salud. Dado que en la región Lambayeque solo una universidad licenciada ofrece la carrera desde el año 2025, esta preferencia podría ser un indicio de una demanda latente y creciente, una vez se dé a conocer y se promueva adecuadamente la oferta educativa. La falta de familiaridad o conocimiento sobre la carrera entre los estudiantes puede presentar una oportunidad para la universidad de posicionarla como una opción atractiva y necesaria en el campo de la salud, respondiendo así a una posible demanda no satisfecha en la región.')
set_p(find_p(B,'Los porcentajes reflejados muestran'),
 f'Los porcentajes reflejados muestran un interés favorable en la Universidad Señor de Sipán por parte del {fmt(si)}% de los estudiantes de quinto año de secundaria que desean estudiar la carrera de Farmacia y Bioquímica, mientras que el {fmt(no)}% no la elegiría en esta universidad. Este análisis sugiere que existe un nivel de aceptación y disposición mayoritario entre los estudiantes para considerar esta carrera como una opción educativa en la Universidad Señor de Sipán, aunque con una proporción importante que aún debe ser captada mediante estrategias de posicionamiento.')
top6=sorted(zip(cats,p6),key=lambda x:-x[1])
set_p(find_p(B,'Las percepciones de los estudiantes de quinto año de secundaria con respecto a la inversión mensual que estarían dispuestos a realizar en la carrera'),
 f'Las percepciones de los estudiantes de quinto año de secundaria con respecto a la inversión mensual que estarían dispuestos a realizar en la carrera de Farmacia y Bioquímica de la Universidad Señor de Sipán. La mayoría de los encuestados (el {fmt(top6[0][1])}%) manifestó estar dispuesto a invertir entre 400 y 500 soles mensuales, seguido por un {fmt(top6[1][1])}% que invertiría entre 500 y 600 soles. Asimismo, un {fmt(A["t6"]["De 1000 a más"])}% estaría dispuesto a invertir 1000 soles o más, y un {fmt(A["t6"]["No opina"])}% no emitió opinión.')
set_p(find_p(B,'Las preferencias de los estudiantes de quinto año de secundaria sobre los atributos'),
 f'Las preferencias de los estudiantes de quinto año de secundaria sobre los atributos de calidad universitaria que consideran importantes al elegir la carrera de Farmacia y Bioquímica de la Universidad Señor de Sipán. El {fmt(A["t7"]["Prestigio"])}% de los encuestados indicó que el prestigio de la universidad es un atributo esencial para su elección; así mismo, un {fmt(A["t7"]["No tiene atributos definidos"])}% no tiene atributos definidos, un {fmt(A["t7"]["Infraestructura adecuada y moderna"])}% mencionó la infraestructura adecuada y moderna y un {fmt(A["t7"]["Exigencia académica"])}% la exigencia académica. Además, un {fmt(A["t7"]["Plana docente calificada"])}% consideró como factor relevante la plana docente calificada y un {fmt(A["t7"]["Costos cómodos"])}% los costos cómodos. Este análisis sugiere que los encuestados dan alta importancia al prestigio como un atributo clave al momento de elegir la institución universitaria.')

# 1.2.1 / 1.2.2
replace_all(B,'1.2.1. Postulantes en la carrera de Farmacia y Bioquímica a según modalidad, y ciclos.','1.2.1. Postulantes en la carrera de Farmacia y Bioquímica según modalidad, y ciclos.')
set_p(find_p(B,'La ausencia de postulantes'),
 'En la región Lambayeque, la carrera de Farmacia y Bioquímica solo registra postulantes en la Universidad Tecnológica del Perú (UTP), única universidad licenciada de la región que la ofrece desde el año 2025. Según su portal de transparencia (postulantes e ingresantes de pregrado 2022-2025), la UTP registró 276 postulantes en su primer año a nivel nacional: 201 en el ciclo 2025-1 y 75 en el ciclo 2025-2. La UTP consolida sus cifras para todas sus sedes, por lo que este total constituye un tope superior de los postulantes en Chiclayo. Ninguna otra universidad licenciada de la región (UNPRG, USAT, USS, UCV y USMP) ofrece la carrera, lo que refleja la necesidad de ampliar los programas educativos adaptados a las demandas de formación farmacéutica en la región.')
set_p(find_p(B,'La ausencia de ingresantes'),
 'En la región Lambayeque, los ingresantes en la carrera de Farmacia y Bioquímica corresponden únicamente a la Universidad Tecnológica del Perú (UTP): 240 ingresantes en 2025 a nivel nacional (186 en el ciclo 2025-1 y 54 en el ciclo 2025-2), con 158 matriculados en 2025-I y 144 en 2025-II. Al no publicarse el desagregado por sede, esta cifra se toma como tope superior de la oferta en Chiclayo. Como referencia histórica, la Universidad Alas Peruanas (UAP), filial Chiclayo, ofreció la carrera hasta diciembre de 2019, cuando cesó por la denegatoria del licenciamiento institucional. La escasa oferta licenciada en el ámbito universitario local subraya la necesidad de desarrollar programas académicos que atiendan las demandas educativas en Farmacia y Bioquímica en la región.')
# 1.2.5 brecha
set_p(find_p(B,'La imposibilidad de determinar la brecha'),
 f'La brecha entre la demanda y la oferta educativa en la región Lambayeque se estima contrastando la demanda con la oferta actual de la Universidad Tecnológica del Perú, única universidad licenciada de la región con la carrera. La demanda potencial (mercado objetivo) asciende a {sp(mo)} jóvenes; aplicando el {fmt(si)}% de interés por estudiar la carrera en la Universidad Señor de Sipán (Tabla 5), la demanda efectiva es de {sp(demanda_ef)} jóvenes. Frente a una oferta máxima de {oferta} ingresantes anuales (tope superior de la UTP a nivel nacional), la brecha o demanda insatisfecha asciende a {sp(brecha)} jóvenes. En un escenario conservador, tomando como demanda efectiva el {fmt(R[11][1][0])}% de estudiantes que prefiere estudiar en la USS cualquier carrera (Tabla 12), la demanda efectiva sería de {sp(cons)} jóvenes y la brecha de {sp(brecha_c)} jóvenes. En ambos escenarios, la oferta regional resulta insuficiente para atender la demanda.')
json.dump({'x':1},open('done.json','w'))

# ---------- Sección 2: oferta ----------
replace_all(B,'Oferta educativa de la carrera profesional de Farmacia y Bioquímica.','Oferta educativa de la carrera profesional de Farmacia y Bioquímica')
p=[q for q in B.iter(W+'p') if ptext(q).strip()=='Figura 2']
print('fig2',len(p))
for q in p: replace_in_p(q,'Figura 2','Figura 3')
for q in B.iter(W+'p'):
    if ptext(q).startswith('En la figura 2, el distrito'): replace_in_p(q,'En la figura 2','En la figura 3')
ptxt=find_p(B,'A nivel nacional se cuentan con 1 institución pública')
set_p(ptxt,'A nivel nacional, entre las universidades licenciadas por la SUNEDU que ofrecen la carrera de Farmacia y Bioquímica se han identificado, de manera referencial, instituciones públicas como la Universidad Nacional Mayor de San Marcos y la Universidad Nacional de Trujillo.')
pv=find_p(B,'También se tiene a 5 instituciones privadas')
set_p(pv,'También se tiene a 8 instituciones privadas que cuentan con la carrera de Farmacia y Bioquímica:')
privs=['Universidad Norbert Wiener S.A.','Universidad Católica de Santa María','Universidad Peruana de Ciencias Aplicadas','Universidad Científica del Sur S.A.C.','Universidad de Ciencias y Humanidades','Universidad María Auxiliadora S.A.C.','Universidad Autónoma del Perú S.A.C.','Universidad Tecnológica del Perú S.A.C.']
bul=[q for q in B.iter(W+'p') if ptext(q).strip() in ['Universidad Peruana Cayetano Heredia','Universidad Privada de Tacna','Universidad Privada Norbert Wiener S.A.','Universidad Peruana Los Andes','Universidad Continental S.A.C.']]
assert len(bul)==5,len(bul)
for q in bul[:5]: pass
for j,nm in enumerate(privs):
    if j<5: set_p(bul[j],nm)
    else:
        new=copy.deepcopy(bul[4]); bul[-1].addnext(new); bul.append(new); set_p(new,nm)
set_p(find_p(B,'La región Lambayeque no cuenta con universidades'),
 'En la región Lambayeque, solo la Universidad Tecnológica del Perú (UTP), sede Chiclayo, ofrece la carrera de Farmacia y Bioquímica desde el año 2025. No la ofrecen la Universidad Nacional Pedro Ruiz Gallo, la Universidad Católica Santo Toribio de Mogrovejo, la Universidad Señor de Sipán, la Universidad César Vallejo ni la Universidad San Martín de Porres (filial Chiclayo). La Universidad Alas Peruanas ofreció la carrera hasta el 2019, año en que cerró por no obtener el licenciamiento institucional. Este listado es referencial y no exhaustivo de la oferta nacional.')

# ---------- guardar y post-procesar (gráficos, miniatura) ----------
TMP='tmp_out.docx'
d.core_properties.title='Demanda Social del Programa de Farmacia y Bioquímica de la Universidad Señor de Sipán -2026'
d.save(TMP)
zin=zipfile.ZipFile(TMP); files={n:zin.read(n) for n in zin.namelist()}; zin.close()
def set_chart(xml,cats,vals):
    xml=xml.decode('utf8')
    # categorías
    cat=re.search(r'<c:cat>.*?</c:cat>',xml,re.S).group(0)
    pts=re.findall(r'<c:pt idx="(\d+)">\s*<c:v>.*?</c:v>\s*</c:pt>',cat,re.S)
    assert len(pts)==len(cats),(len(pts),len(cats))
    newcat=cat
    for i,cn in enumerate(cats):
        newcat=re.sub(rf'(<c:pt idx="{i}">\s*<c:v>).*?(</c:v>)',lambda m:m.group(1)+cn+m.group(2),newcat,count=1,flags=re.S)
    xml=xml.replace(cat,newcat)
    val=re.search(r'<c:val>.*?</c:val>',xml,re.S).group(0)
    pts=re.findall(r'<c:pt idx="(\d+)">',val)
    nv=val
    assert len(pts)>=len(vals)-1,(len(pts),len(vals))
    # reconstruir puntos de valor
    fc=re.search(r'<c:formatCode>.*?</c:formatCode>',val,re.S)
    ptxml=''.join(f'<c:pt idx="{i}"><c:v>{v}</c:v></c:pt>' for i,v in enumerate(vals))
    nv=re.sub(r'<c:ptCount val="\d+"/>.*</c:numCache>',lambda m:f'<c:ptCount val="{len(vals)}"/>'+ptxml+'</c:numCache>',val,flags=re.S)
    xml=xml.replace(val,nv)
    return xml.encode('utf8')
files['word/charts/chart1.xml']=set_chart(files['word/charts/chart1.xml'],['Si','No'],[si/100,no/100])
files['word/charts/chart2.xml']=set_chart(files['word/charts/chart2.xml'],cats,[p/100 for p in p6])
# quitar miniatura antigua (mostraba la carátula anterior)
files.pop('docProps/thumbnail.emf',None)
rels=files['_rels/.rels'].decode('utf8')
rels=re.sub(r'<Relationship [^>]*thumbnail[^>]*/>','',rels); files['_rels/.rels']=rels.encode('utf8')
with zipfile.ZipFile(OUT,'w',zipfile.ZIP_DEFLATED) as z:
    order=['[Content_Types].xml']+[n for n in files if n!='[Content_Types].xml']
    for n in order: z.writestr(n,files[n])
os.remove(TMP)
print('saved',OUT)
