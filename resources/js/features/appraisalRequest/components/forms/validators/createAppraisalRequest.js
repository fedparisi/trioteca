import * as yup from "yup";

const schema = yup.object().shape({
    customer_name: yup.string().required("Debe ingresar el nombre del cliente"),
    customer_telephone: yup.string().required("Debe ingresar el telefono del cliente"),
    customer_email: yup
        .string()
        .email("Debe ingresar un email válido")
        .required("Debe ingresar el email del cliente"),
    property_address: yup
        .string()
        .required("Debe ingresar una direccion de la propiedad"),
    property_base_price: yup
        .number("El valor debe ser numérico")
        .required("Debe ingresar un precio base de la propiedad"),
});

export default schema;
