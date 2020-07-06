import React from "react";
import "./style.scss";
interface IProps {

    style?: object,
}

const Timeline: React.FC<IProps> = (props) => {
    const { children, style,} = props;
    return (
      <div className="timeline-container hide-1290" style={{ marginTop: 150 }}>
        <ul>
          <li>
            <span></span>
            <div>
              <div className="timeline-title">Websites?</div>
              <div className="timeline-info">Hoe zit dat in elkaar?</div>
            </div>
            <span className="timeline-number dark">
              <span>2009</span> <span>2009</span>
            </span>
          </li>
          <li>
            <div>
              <span></span>
              <div className="timeline-title">VMBO</div>
              <div className="timeline-info">VMBO Metaalbewerking</div>
            </div>
            <span className="timeline-number">
              <span className="dark">2009</span> <span>2013</span>
            </span>
          </li>
          <li>
            <div>
              <span></span>
              <div className="timeline-title">MBO</div>
              <div className="timeline-info">MBO Scheeps en Jacht -bouw</div>
            </div>
            <span className="timeline-number">
              <span>2013</span> <span>2017</span>
            </span>
          </li>
          <li>
            <div>
              <span></span>
              <div className="timeline-title">HBO</div>
              <div className="timeline-info">HBO Informatica</div>
            </div>
            <span className="timeline-number">
              <span>2017</span> <span>Heden</span>
            </span>
          </li>
        </ul>
      </div>
    );
};

export default Timeline;