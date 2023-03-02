import React from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

const API_KEY = '32648236-214cf230cab87b8c686639ba9';
const URL = `https://pixabay.com/api/?q=cat&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

export default class App extends React.Component {
  onSubmit = () => {};

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.onSubmit}></Searchbar>;
        <ImageGallery></ImageGallery>;
      </div>
    );
  }
}

//       <ImageGallery >
//
//       </ImageGallery>

//       <ImageGalleryItem >
//
//       </ImageGalleryItem>

//       <Loader >

//       </Loader>

//       <Button ></Button>
//       <Modal >
//       <div class="overlay">
//   <div class="modal">
//     <img src="" alt="" />
//   </div>
// </div>
//       </Modal> */}
//     </div>
//   );
// };
