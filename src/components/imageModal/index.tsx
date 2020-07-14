import React, {useState} from "react";
import "./style.scss";

interface IProps {
    imageStyle?: object,
    modalStyle?: object,
    src: string,
    alt:string
}




const ImageModel: React.FC<IProps> = (props) => {
    const { imageStyle, modalStyle, src, alt } = props;

    const [modalImage, setModalImage] = useState<null | string>(null);

    const handleImageClick = (src: string) => {
        setModalImage(src);
    }

    return (
    <div className="imageModel">
            <img className="" src={src} alt={alt} style={imageStyle} onClick={(e) => {handleImageClick(e.currentTarget.src)}}/>

            <div id="myModal" className="modal" style={{
                display: `${modalImage == null ? 'none' : 'block'}`,
                ...modalStyle} }>

                <span className="close" onClick={() => setModalImage(null)}>&times;</span>

                <img className="modal-content" alt={alt + "2"} src={src}/>

            <div className="caption"></div>
        </div>
    </div>

    );
};

export default ImageModel;