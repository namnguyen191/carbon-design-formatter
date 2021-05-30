import React from 'react';
import { Tabs, Tab } from 'carbon-components-react';
import GraphQLFormatter from '../../components/GraphQLFormatter';

const LandingPage = () => {
  const props = {
    tabs: {
      selected: 0,
      role: 'navigation'
    },
    tab: {
      role: 'presentation',
      tabIndex: 0
    }
  };

  return (
    <div className="bx--grid bx--grid--full-width landing-page">
      <div className="bx--row landing-page__banner">
        <div className="bx--col-lg-16">
          <h1 className="landing-page__heading">
            Design &amp; build with Carbon
          </h1>
        </div>
      </div>
      <div className="bx--row landing-page__r2">
        <div className="bx--col bx--no-gutter">
          <Tabs {...props.tabs}>
            <Tab {...props.tab} label="GraphQL">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row landing-page__tab-content">
                  <div className="bx--col-md-4 bx--col-lg-7">
                    <h2 className="landing-page__subheading">GraphQL Query</h2>
                    {/* <Resizable direction="vertical">
                      <div
                        style={{
                          height: 'calc(100% - 10px)',
                          display: 'flex',
                          flexDirection: 'row'
                        }}
                      >
                        <Resizable direction="horizontal">
                          <CodeEditor
                            initialValue={'hello'}
                            onChange={(value) => console.log(value)}
                          />
                        </Resizable>
                      </div>
                    </Resizable> */}
                    <GraphQLFormatter />
                  </div>
                  {/* <div className="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
                    <img
                      className="landing-page__illo"
                      src={`${process.env.PUBLIC_URL}/tab-illo.png`}
                      alt="Carbon illustration"
                    />
                  </div> */}
                </div>
              </div>
            </Tab>
            <Tab {...props.tab} label="Transformation">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row landing-page__tab-content">
                  <div className="bx--col-lg-16">
                    Rapidly build beautiful and accessible experiences. The
                    Carbon kit contains all resources you need to get started.
                  </div>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
