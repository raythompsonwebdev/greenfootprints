import CollectionSlide from '../components/CollectionSlide.jsx';
import collectionData from '../static/data/collectionData.js';

const Collections = () => {
  return (
    <div className="page-wrapper" id="collections">
      <main className="content">
        <h2 className="content-title">Collections &amp; Sorting</h2>
        <div id="collection-slides">
          <CollectionSlide
            slides={collectionData}
            className="collection-slide"
          />
        </div>
      </main>
    </div>
  );
};

export default Collections;
