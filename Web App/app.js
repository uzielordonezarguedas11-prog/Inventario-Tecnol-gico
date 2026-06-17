let productos = [];

function guardar() {

const codigo =
document
.getElementById("codigo")
.value
.trim();

const nombre =
document
.getElementById("nombre")
.value
.trim();

const categoria =
document
.getElementById("categoria")
.value
.trim();

const precio =
document
.getElementById("precio")
.value
.trim();

const cantidad =
document
.getElementById("cantidad")
.value
.trim();

if (
codigo === "" ||
nombre === "" ||
categoria === "" ||
precio === "" ||
cantidad === ""
) {

alert(
"Complete todos los campos"
);

return;

}

const producto = {

codigo,
nombre,
categoria,
precio,
cantidad

};

productos.push(
producto
);

mostrar();

alert(
"Producto guardado correctamente"
);

document
.getElementById(
"formulario"
)
.reset();

}

function mostrar() {

const tabla =
document
.getElementById(
"tablaProductos"
);

tabla.innerHTML = "";

for (
let i = 0;
i < productos.length;
i++
) {

tabla.innerHTML += `

<tr>

<td>
${productos[i].codigo}
</td>

<td>
${productos[i].nombre}
</td>

<td>
${productos[i].categoria}
</td>

<td>
₡${productos[i].precio}
</td>

<td>
${productos[i].cantidad}
</td>

</tr>

`;

}

}

function buscar() {

const codigoBuscar =
prompt(
"Ingrese el código"
);

const encontrado =
productos.find(
p =>
p.codigo === codigoBuscar
);

if (
encontrado
) {

alert(
`Producto encontrado:

Nombre:
${encontrado.nombre}

Categoría:
${encontrado.categoria}

Precio:
₡${encontrado.precio}

Cantidad:
${encontrado.cantidad}`
);

} else {

alert(
"No encontrado"
);

}

}