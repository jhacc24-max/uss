import copy,re
from docx.oxml.ns import qn
W='{http://schemas.openxmlformats.org/wordprocessingml/2006/main}'
def ptext(p): return ''.join(t.text or '' for t in p.iter(W+'t'))
def replace_in_p(p,old,new):
    ts=[t for t in p.iter(W+'t')]
    full=''.join(t.text or '' for t in ts)
    i=full.find(old)
    if i<0: return False
    j=i+len(old); pos=0; done=False
    for t in ts:
        s=t.text or ''; a,b=pos,pos+len(s); pos=b
        if b<=i or a>=j:
            continue
        lo=max(i,a)-a; hi=min(j,b)-a
        if not done:
            t.text=s[:lo]+new+s[hi:]; done=True
        else:
            t.text=s[:lo]+s[hi:]
        t.set('{http://www.w3.org/XML/1998/namespace}space','preserve')
    return True
def replace_all(root,old,new,count=None):
    n=0
    for p in root.iter(W+'p'):
        while old in ptext(p):
            replace_in_p(p,old,new); n+=1
            if old in new: break
    return n
def set_p(p,new):
    ts=[t for t in p.iter(W+'t')]
    if not ts: raise ValueError('no text')
    ts[0].text=new; ts[0].set('{http://www.w3.org/XML/1998/namespace}space','preserve')
    for t in ts[1:]: t.text=''
def find_p(root,prefix,nth=0):
    m=[p for p in root.iter(W+'p') if ptext(p).strip().startswith(prefix)]
    if len(m)<=nth: raise KeyError(prefix)
    return m[nth]
def set_cell(tc,new):
    ps=list(tc.iter(W+'p'))
    p=ps[0]; ts=list(p.iter(W+'t'))
    if ts:
        set_p(p,new)
    else:
        r=p.makeelement(W+'r',{}); t=r.makeelement(W+'t',{}); t.text=new; r.append(t); p.append(r)
