function calculoIva ( cantidad ) {
  let iva = cantidad * 0.21;
  return iva;
}

function calculoIRPF ( cantidad ) {
  let irpf = cantidad * 0.15;
  return irpf;
}


export { calculoIva, calculoIRPF };

