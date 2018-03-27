function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  )
}
function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title"> welcome </h1>
      <p className="dialog-message"> 哦哦哦</p>
    </FancyBorder>
  )
}
function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left"> {props.left} </div>
       <div className="SplitPane-right"> {props.right} </div>
    </div>
  )
}
function App() {
  return (
    <SplitPane 
      left = {
        <Contacts />
      }
      right = {
        <Chat />
      }
    />
  )
}