import pymupdf as fitz, glob, collections
files = sorted(set(glob.glob('**/*', recursive=True)) - set(['fuentes/Nueva carpeta/6312746-edo-al-2025 (1).pdf','fuentes/Nueva carpeta/BEF_10_dic2025']))
for f in files:
    try: d = fitz.open(f)
    except Exception: continue
    if not d.is_pdf: continue
    fonts=collections.Counter(); cols=collections.Counter(); sizes=collections.Counter(); fills=collections.Counter()
    for p in d:
        for b in p.get_text('dict')['blocks']:
            for l in b.get('lines',[]):
                for s in l['spans']:
                    n=len(s['text'].strip())
                    fonts[s['font']]+=n; cols['#%06x'%s['color']]+=n; sizes[round(s['size'],1)]+=n
        for dr in p.get_drawings():
            for k in ('fill','color'):
                c=dr.get(k)
                if c: fills['#%02x%02x%02x'%tuple(int(x*255) for x in c[:3])]+=1
    print('=====',f,len(d),'pages', d[0].rect, d.metadata.get('title'))
    print(' text:', d[0].get_text()[:200].replace('\n',' | '))
    print(' fonts', fonts.most_common(8)); print(' textcolors', cols.most_common(8)); print(' sizes', sizes.most_common(10)); print(' fills', fills.most_common(12))
