import * as Yup from 'yup'

export const educationSchema = Yup.object().shape({
    education: Yup.array().min(1, "Atleast 1 career is required"),
    education_level: Yup.string().required("Education is required"),
    institution: Yup.string().required("Institution name is required"),
    field: Yup.string().required("Field of study is required"),
})