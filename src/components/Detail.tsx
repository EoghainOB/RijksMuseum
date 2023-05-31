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
          alt={data.longTitle}
          src={`${data?.webImage?.url}`}
        />
      </div>
      <div className="information">
        <div className="informationText">
          <h3>{data.principalOrFirstMaker}</h3>
          <h2>{data.title}</h2>
          <h3>
            <a href={data.links.web} target="_blank" rel="noopener noreferrer">
              View on Rijksmuseum website
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Detail;
