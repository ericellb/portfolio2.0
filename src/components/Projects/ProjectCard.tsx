import React from "react";
import { makeStyles, Button, Icon } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  container: {
    width: "100%",
    display: "flex",
    background: "white",
    boxShadow: "0 50px 100px rgba(50,50,93,.05), 0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.1)",
    fontFamily: "Roboto",
    color: "#525f7f",
    marginBottom: "40px"
  },
  cardImageContainer: {
    width: "40%"
  },
  cardImage: {
    width: "100%",
    height: "100%"
  },
  cardMain: {
    width: "60%",
    padding: "48px"
  },
  cardTitle: {
    fontSize: "22px",
    marginBottom: "24px",
    fontWeight: 500
  },
  cardDesc: {
    marginBottom: "24px",
    lineHeight: "26px"
  },
  cardSkillsContainer: {
    display: "flex",
    marginBottom: "24px"
  },
  cardSkill: {
    padding: "6px",
    border: "2px solid #92eac0",
    borderRadius: "8px",
    marginRight: "16px",
    fontSize: "14px"
  },
  cardButtonContainer: {
    display: "flex"
  },
  cardButton: {
    marginRight: "16px"
  },
  cardButtonDemo: {
    background: "#747fe0",
    ["&:hover"]: {
      background: "#7795f8"
    }
  },
  cardButtonSource: {
    background: "#fff",
    color: "#7795f8",
    ["&:hover"]: {
      background: "#fff"
    }
  }
}));

interface ProjectCardProps {
  data: {
    title: string;
    description: string;
    skills: string[];
    liveurl: string;
    repourl: string;
    imageurl: string;
  };
}

export default function ProjectCard(props: ProjectCardProps) {
  const classes = useStyles({});

  const handleLink = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className={classes.container}>
      <div className={classes.cardImageContainer}>
        <img src={process.env.PUBLIC_URL + `/${props.data.imageurl}.png`} className={classes.cardImage} />
      </div>
      <div className={classes.cardMain}>
        <div className={classes.cardTitle}>{props.data.title}</div>
        <div className={classes.cardDesc}>{props.data.description}</div>
        <div className={classes.cardSkillsContainer}>
          {props.data.skills.map(skill => {
            return <div className={classes.cardSkill}> {skill} </div>;
          })}
        </div>
        <div className={classes.cardButtonContainer}>
          <Button
            onClick={() => handleLink(props.data.liveurl)}
            variant="contained"
            color="primary"
            className={classes.cardButton + " " + classes.cardButtonDemo}
            endIcon={<Icon className="fa fa-external-link-alt"></Icon>}
          >
            Live Demo
          </Button>
          <Button
            onClick={() => handleLink(props.data.repourl)}
            variant="contained"
            color="primary"
            className={classes.cardButton + " " + classes.cardButtonSource}
            endIcon={<Icon className="fab fa-github"></Icon>}
          >
            View Source
          </Button>
        </div>
      </div>
    </div>
  );
}
