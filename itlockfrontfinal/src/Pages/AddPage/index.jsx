import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./style.scss";
import { workDelete, workPost } from "../../helpers/WorkCrud";
import { Helmet } from 'react-helmet-async';

const AddPage = () => {
  const [api, setApi] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000")
      .then((res) => res.json())
      .then((data) => setApi(data));
  }, []);
  return (
    <>
    <Helmet>
    <title>Add page</title>
    </Helmet>
      <div className="addPage">
        <div className="addPage__form">
          <Formik
            initialValues={{ img: "", title: "", text: "" }}
            validationSchema={Yup.object({
              img: Yup.string().required("Required"),
              title: Yup.string().required("Required"),
              text: Yup.string().required("Required"),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                workPost(values);
                setSubmitting(false);
              }, 400);
            }}
          >
            <Form>
              <div>
                <div>
                  <label htmlFor="img">Image</label>
                  <Field name="img" type="text" />
                  <ErrorMessage name="img" />
                </div>

                <div>
                  <label htmlFor="title">Title</label>
                  <Field name="title" type="text" />
                  <ErrorMessage name="title" />
                </div>

                <div>
                  <label htmlFor="text">Text</label>
                  <Field name="text" type="text" />
                  <ErrorMessage name="text" />
                </div>

                <button type="submit">Submit</button>
              </div>
            </Form>
          </Formik>
        </div>
        <div className="addPage__table">
          <table>
            <thead>
              <th>Image</th>
              <th>Title</th>
              <th>Text</th>
              <th>Delete</th>
            </thead>
            <tbody>
              {api.map((x) => {
                return (
                  <tr key={x._id}>
                    <th>
                      <img src={x.img} alt="" />
                    </th>
                    <th>{x.title}</th>
                    <th>{x.text}</th>
                    <th>
                      <button onClick={() => workDelete(x._id)}>Delete</button>
                    </th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AddPage;
