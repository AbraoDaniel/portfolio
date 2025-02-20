import { useNavigate } from "react-router-dom"

interface IEmailSendedMessage {
  setIsVisible: (value: boolean) => void
}
const EmailSendedMessage: React.FC<IEmailSendedMessage> = ({setIsVisible}) => {
  const navigate = useNavigate()
  function handleCloseMessage() {
    setIsVisible(false)
    navigate('/contacts')
  }
  return (
    <div className="finished-order-overlay">
      <div className="finished-order-message" >
        <button className="dismiss" type="button" onClick={handleCloseMessage}>×</button>
        <div className="header">
          <div className="image">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M20 7L9.00004 18L3.99994 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              </g>
            </svg>
          </div>
          <div className="content">
            <span className="title">{'E-mail enviado com sucesso'}</span>
            <p className="message">
              {"Seu e-mail foi enviado com sucesso e já está na minha caixa de entrada! Assim que puder, lhe retornarei para conversarmos 🚀"}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmailSendedMessage
