import React from 'react';

class Hello extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }



  render() {
    return (
      <div className='container'>
        <div className='row flipInX animated'>
          <div className='col-sm-8'>
            <div className='panel panel-default'>
              <div className='panel-heading'>Hello World</div>
              <div className='panel-body'>
                Hello world 韩海迪
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hello;