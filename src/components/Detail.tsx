import { IData } from "../types";

const Detail = (props: { data: IData }) => {
  const { data } = props;

  const backgroundImage = `url(${data?.webImage?.url})`;

  return (
    <div
      className="result"
      style={{ backgroundImage, backgroundPosition: "center" }}
    >
      <div className="image">
        <img
          className="resultImages"
          alt={data.title}
          src={`${data?.webImage?.url}`}
        />
        <div className="imageOverlay">
          <a
            href={data?.webImage?.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="plusSymbol">+</div>
          </a>
        </div>
      </div>
      <div className="information">
        <div className="informationText">
          <h3>{data.principalOrFirstMaker}</h3>
          <h2>{data.longTitle}</h2>
          <h4>
            <a href={data.links.web} target="_blank" rel="noopener noreferrer">
              View on Rijksmuseum website
            </a>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Detail;
