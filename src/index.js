import react from "react"
import reactDOM from "react-dom/client"
// import axios from "axios"
reactDOM.createRoot(document.querySelector("div")).render(<react.StrictMode>
  <App />
</react.StrictMode>)
function App() {
  let state = react.useState()
  let expression = react.useRef()
  let style = react.useRef()
  let prompt
  if (state[0] === "images/funnyAbstract.png") {
    prompt = "masterpiece, best quality, funny looking person, portrait, abstract, rtx on, 8k, by greg ratakowski"
  } else if (state[0] === "images/funnyPhotorealistic.png") {
    prompt = "masterpiece, best quality, funny looking person, portrait, photorealistic, rtx on, 8k, by greg ratakowski"
  } else if (state[0] === "images/sadAbstract.png") {
    prompt = "masterpiece, best quality, sad looking person, portrait, abstract, rtx on, 8k, by greg ratakowski"
  } else if (state[0] === "images/sadPhotorealistic.png") {
    prompt = "masterpiece, best quality, sad looking person, portrait, photorealistic, rtx on, 8k, by greg ratakowski"
  }
  // let Descriptor = react.useRef()
  // let clothing = react.useRef()
  // let item = react.useRef()
  // let descriptor = react.useRef()
  return <>
    <form onSubmit = {async function(event) {
      event.preventDefault()
      if (expression.current.value === "funny") {
        if (style.current.value === "abstract") {
          state[1]("images/funnyAbstract.png")
        } else {
          state[1]("images/funnyPhotorealistic.png")
        }
      } else {
        if (style.current.value === "abstract") {
          state[1]("images/sadAbstract.png")
        } else {
          state[1]("images/sadPhotorealistic.png")
        }
      }
      // img.current.src = await axios.post("https://website.com/path", { Descriptor: Descriptor.current.value, clothing: clothing.current.value, item: item.current.value, descriptor: descriptor.current.value })
    }} style = {{ borderStyle: "solid" }}>
      <select ref = {expression}>
        <option>
          funny
        </option>
        <option>
          sad
        </option>
      </select>
      <select ref = {style}>
        <option>
          abstract
        </option>
        <option>
          photorealistic
        </option>
      </select>
      <p>
        {prompt}
      </p>
      {/* <input ref = {Descriptor} placeholder = {"Descriptor"} />
      <input ref = {clothing} placeholder = {"clothing"} />
      <input ref = {item} placeholder = {"item"} />
      <input ref = {descriptor} placeholder = {"descriptor"} /> */}
      <button>
        diffuse
      </button>
    </form>
    <img src = {state[0]} />
  </>
}