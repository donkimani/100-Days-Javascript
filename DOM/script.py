import xml.dom.minidom as m
doc = m.parse(r'index.html')
doc.nodeName
p_list = doc.getElementByTagName("Ruto")
print(p_list)