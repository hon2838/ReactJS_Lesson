import React from "react";
import {Button, Skeleton, Steps} from 'antd';
import 'antd/dist/antd.css';

import TopMenuBar from "../components/Menu";

const {Step} = Steps;

class AboutPage extends React.Component {
    state = {
        loading: false,
    };
    showSkeleton = () => {
        this.setState({loading: true});
        setTimeout(() => {
            this.setState({loading: false});
        }, 3000);
    };

    render() {
        return (
            <div>
                <TopMenuBar/>
                <container>

                    this is about page aaa
                    <Steps current={1}>
                        <Step title="Finished" description="This is a description."/>
                        <Step title="In Progress" subTitle="Left 00:00:08" description="This is a description."/>
                        <Step title="Waiting" description="This is a description."/>
                    </Steps>
                    <div className="article">
                        <Skeleton avatar loading={this.state.loading}>
                            <div>
                                <h4>Ant Design, a design language</h4>
                                <p>
                                    We supply a series of design principles, practical patterns and high quality design
                                    resources (Sketch and Axure), to help people create their product prototypes
                                    beautifully and efficiently.
                                </p>
                            </div>
                        </Skeleton>
                        <Button onClick={this.showSkeleton} disabled={this.state.loading}>
                            Show Skeleton
                        </Button>
                    </div>
                </container>
            </div>
        );
    }
}

export default AboutPage;