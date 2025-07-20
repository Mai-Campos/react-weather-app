
import "./styles/FooterComponent.css";
import GitHubIcon from '@mui/icons-material/GitHub';

function FooterComponent() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p><strong>Información de la página:</strong> App de clima creada con React y OpenWeatherMap API.</p>
        <p><strong>Herramientas:</strong> React, Material UI, Fetch API.</p>
        <p><strong>Desarrollador:</strong> Maikol</p>
        <p>
          <a href="https://github.com/Mai-Campos" target="_blank" rel="noopener noreferrer" className="github-link">
            <GitHubIcon style={{ verticalAlign: "middle", marginRight: "6px", color : "#000000", fontSize: "40px" }} />
          </a>
        </p>
      </div>
    </footer>
  );
}

export default FooterComponent;
