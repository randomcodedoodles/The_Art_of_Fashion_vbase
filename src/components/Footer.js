import "./styles/Footer.css"

export const Footer = (props) => {
    return (
        <footer className={`App-footer ${props.dropDownManuShown ? 'drop-down' : ''}`}>
            <div className="footer-mark">Website Development By XW</div>
        </footer>
    )
}