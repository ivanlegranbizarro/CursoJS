# listado de personas

personas = ["Juan", "Pedro", "Luis", "Ana", "Maria", "Luis"]

alumnos = ["Evaristo", "Miriam", "Luis"]

def searchPerson(array, name)
    indices = array.each_index.select{|i| array[i] == name}
    return indices
end

print searchPerson(personas, "Luis")


print searchPerson(alumnos,"Evaristo")
