import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, URL }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <a href={URL} style={{textDecoration: "none", color: "#fff", cursor: "pointer"}} className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </a>
      </div>
    </Col>
  )
}
