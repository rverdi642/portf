import React, { Component } from 'react';
import { Document, Page } from 'react-pdf/dist/entry.webpack';
// import 'react-pdf/dist/Page/AnnotationLayer.css';
import { Card } from 'react-mdl';
// import './Sample.less';

import pdfFile from './assests/RlvResume.pdf';

// const options = {
//   cMapUrl: 'cmaps/',
//   cMapPacked: true,
// };

export default class Sample extends Component {
  state = { numPages: null, pageNumber: 1 };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  goToPrevPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
  goToNextPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber + 1 }));
 
  render() {
    const { pageNumber, numPages } = this.state;
    // console.log (this.state)

    return (
      <div style={{backgroundColor: 'rgba(161, 107, 123, 0.579)'}}>
      <nav>
          <button onClick={this.goToPrevPage}>Prev</button>
          <button onClick={this.goToNextPage}>Next</button>
        </nav>
        <div>
        <Card shadow={5} style={{ width: 600 ,margin: 'auto'}}>
              <Document style={{height: '800', width: '900'}}
                file={pdfFile}
                onLoadSuccess={this.onDocumentLoadSuccess}
              >
                {/* file={pdfFile} */}
            {/* onLoadSuccess={this.onDocumentLoadSuccess} */}
          {/* > */}
            <Page pageNumber={pageNumber} width={800} />
         
              </Document>
          </Card>
          </div>
          <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>
    );
  }
}