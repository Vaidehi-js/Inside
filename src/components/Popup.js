import { Formik } from 'formik'
import React from 'react'
import './popup.css';

const Popup = () => {
  return (
    <div><>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      rel="stylesheet"
    />
    {/* Google Fonts */}
    <link
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      rel="stylesheet"
    />
    {/* MDB */}
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.0.1/mdb.min.css"
      rel="stylesheet"
    />
    <div className="card d-flex align-items-center vh-100">
      <div className="row w-100">
        <div className="col-md-6">
          <h5 className="h4">Call Our experts</h5>
          <h6 className="h5">Data Science: +91 323r2f</h6>
          <h6 className="h5">Product Management: +91 342363y</h6>
          <br />
          <img
            className="w-100"
            src="https://www.insaid.co/wp-content/uploads/2021/12/checklist-popup-image2.png"
            alt=""
          />
        </div>
        <div className="col-md-6">
          <h5 className="h4">Schedule a 1-on-1 consultation</h5>
          <h3 className="h3">Request a Callback</h3>
          <br />
          <Formik initialValues={{Mobile:"", Name:"", email:"", }}>
          {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}> <br></br>

          <input type={"tele"} className="form-control mb-4" name="Mobile"onChange={handleChange} value={values.Mobile} placeholder="987654313" required/>
          <input type={"text"} className="form-control mb-4" name="Name"onChange={handleChange} value={values.Name} placeholder= " Your name"required/>
          <input type={"email"} className="form-control mb-4" name="email"onChange={handleChange} value={values.email} required placeholder='Email' />
          <input type={"email"} className="form-control mb-4" name="email"onChange={handleChange} value={values.email} required placeholder='Enter program' />

          <br />
          <button className="callbtn">Call me back</button> </form>
          )}
          </Formik>
        </div>
      </div>
    </div>
  </>
  </div>
  )
}

export default Popup