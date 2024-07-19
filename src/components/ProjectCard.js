import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, git }) => {
  return (
    <Col size={12} sm={8} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <a href={git} target="_blank" rel="noopener noreferrer" className="github-link">
            GitHub
          </a>
        </div>
      </div>
    </Col>
  )
}
