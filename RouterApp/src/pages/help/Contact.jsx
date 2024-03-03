import { Form, redirect, useActionData } from "react-router-dom"
//import { useHistory } from "react-router-dom";
export const Contact = () => {
  const errors = useActionData()
  return (
    <div className="contact">
      <h3>İletişim</h3>
      <Form method="post" action="/help/contact">
        <div>
          <label htmlFor="email">Email:</label>
          <input name="email" type="text" />
          {errors?.email && <span className="error">{errors.email}</span>}
        </div>
        <div>
          <label htmlFor="message"></label>
          <textarea name="message" id="" cols="30" rows="10"></textarea>
          {errors?.message && <span>{errors.message}</span>}
        </div>
        <button type="submit">Submit</button>
      </Form>
    </div>
  )
}

export const ContactAction = async ({ request }) => {
  const data = await request.formData()
  const email = data.get("email")
  const message = data.get("message")
  const errors = {}
  if (typeof email !== "string" || !email.includes("@")) {
    errors.email = "E Mail giriniz"
  }
  if (typeof message !== "string" || message.length < 10) {
    errors.message = "Mesaj için en az 10 karakter gir"
  }

  if (Object.keys(errors).length) {
    return errors
  }

  return redirect("/")
}