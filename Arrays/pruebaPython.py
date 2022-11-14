
personas = ["Juan",  "Pedro",  "Maria",  "Luis",  "Ana", "Maria"]


def buscaTodos(lista,  nombre):
    pos = []
    for i in range(len(lista)):
        if lista[i] == nombre:
            pos.append(i)
    return pos


print(buscaTodos(personas,  "Maria"))
