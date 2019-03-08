import React, { Component } from 'react';
import { Document, Page } from 'react-pdf/dist/entry.webpack';
// import 'react-pdf/dist/Page/AnnotationLayer.css';
import { Card } from 'react-mdl';
import pdfFile from './assests/Resume.pdf';

const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
};

 export default class Sample extends Component {
//   state = { numPages: null, pageNumber: 1 };

//   onDocumentLoadSuccess = ({ numPages }) => {
//     this.setState({ numPages });
//   };

//   goToPrevPage = () =>
//     this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
//   goToNextPage = () =>
//     this.setState(state => ({ pageNumber: state.pageNumber + 1 }));
 
//   render() {
//     const { pageNumber, numPages } = this.state;
//     // console.log (this.state)

//     return (
//       <div style={{backgroundColor: 'rgba(161, 107, 123, 0.579)'}}>
//         <nav className='pdfnav' style={{marginTop: '60'}}>
//           <button onClick={this.goToPrevPage}>Prev</button>
//           <button onClick={this.goToNextPage}>Next</button>
//         </nav>
//         <div>
//         {/* <Card shadow={5} style={{ width: '900' ,margin: 'auto'}}> */}
//         <Card shadow={5} style={{marginLeft: '20px'}}>
//               <Document
//                 width={1000}
//                 file={pdfFile}
//                 onLoadSuccess={this.onDocumentLoadSuccess}
//               >
//                 {/* file={pdfFile} */}
//             {/* onLoadSuccess={this.onDocumentLoadSuccess} */}
//           {/* > */}
//             <Page pageNumber={pageNumber} width={900} />
         
//               </Document>
//           </Card>
//           </div>
//           <p>
//           Page {pageNumber} of {numPages}
//         </p>
//       </div>
//     );
//   }
// }
state = {
  file: pdfFile,
  numPages: null,
}

onFileChange = (event) => {
  this.setState({
    file: event.target.files[0],
  });
}

onDocumentLoadSuccess = ({ numPages }) => {
  this.setState({ numPages });
}

render() {
  const { file, numPages } = this.state;

  return (
    <div className="Example">
      {/* <header>
        <h1>react-pdf sample page</h1>
      </header> */}
      <div className="Example__container"  style={{marginLeft: '150px', marginTop: '50px'}}>
        {/* <div className="Example__container__load">
          <label htmlFor="file">Load from file:</label>
          {' '}
          <input
            type="file"
            onChange={this.onFileChange}
          />
        </div> */}
        <div className="container__document">
          <Document
           
            file={file}
            onLoadSuccess={this.onDocumentLoadSuccess}
            options={options}
          >
            {
              Array.from(
                new Array(numPages),
                (el, index) => (
                  <Page
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                  />
                ),
              )
            }
          </Document>
        </div>
      </div>
    </div>
  );
}
}