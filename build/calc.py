import json
T=json.load(open('tables.json'))
K=['lab','rad','ter']
def num(s): return float(s.replace('%','').replace(',','.'))
def lrm(pcts,n):
    raw=[p*n/100 for p in pcts]; f=[int(x) for x in raw]
    rem=n-sum(f)
    for i in sorted(range(len(raw)),key=lambda i:-(raw[i]-f[i]))[:rem]: f[i]+=1
    return f
def own(tab):  # rows -> {label:(f,pct_recalc)}
    rows=tab[1:-1]; tot=int(tab[-1][1]); 
    return {r[0]:(int(r[1]),int(r[1])/tot*100) for r in rows},tot
res={}
# T5 interes
d={}
for k in K:
    t=T[k][4]; o,tot=own(t); d[k]=(o,tot); print(k,'T5',o,tot)
avg={c:sum(d[k][0].get(c,(0,0))[1] for k in K)/3 for c in ['Si','No']}
res['t5']=avg
# T6 monto
cats=['De 400 a 500','De 500 a 600','De 600 a 700','De 800 a 900','De 900 a 1000','De 1000 a más','No opina']
d6={k:own(T[k][5]) for k in K}
res['t6']={c:sum(d6[k][0].get(c,(0,0))[1] for k in K)/3 for c in cats}
# T7 attrs
d7={k:own(T[k][6]) for k in K}
for k in K: print(k,'T7',d7[k])
allc=[]
for k in K:
    for c in d7[k][0]:
        if c not in allc: allc.append(c)
res['t7']={c:sum(d7[k][0].get(c,(0,0))[1] for k in K)/3 for c in allc}
# T4 own row pct
own4=[]
for k,lab in zip(K,['laboratorio clínico','Radiología','terapia física']):
    for r in T[k][3]:
        if lab in r[0]: own4.append((r[1],r[2]))
print(own4)
res['own4']=sum(num(p) for f,p in own4)/3; res['own4f']=sum(int(f) for f,p in own4)/3
json.dump(res,open('avg.json','w'),ensure_ascii=False,indent=1)
print(json.dumps(res,ensure_ascii=False,indent=1))
