import * as yup from "yup";

const schema = yup.object().shape({
    new_status_id: yup.string().required("Debe seleccionar un estado"),
});

export default schema;
