import React from "react";
import dynamic from "next/dynamic";
import {Col, Divider, Layout, Row, Typography} from "antd";
import graphData from "../data";

const DynamicChart = dynamic(() => import('../components/Chart'), {ssr: false});

export default function Home() {
    return  <Layout>
        <Layout.Content>
            <Col span={24}>
                <Row>
                    <Col span={24}>
                        <Row justify="center">
                            <Typography.Title>RSS</Typography.Title>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <DynamicChart data={graphData} field="rss" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Divider />
                <Col span={24}>
                    <Row>
                        <Col span={24}>
                            <Row justify="center">
                                <Typography.Title>Heap Used</Typography.Title>
                            </Row>
                            <Row>
                                <Col span={24}>
                                    <DynamicChart data={graphData} field="heapUsed" />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Divider />
                <Col span={24}>
                    <Row>
                        <Col span={24}>
                            <Row justify="center">
                                <Typography.Title>Heap Total</Typography.Title>
                            </Row>
                            <Row>
                                <Col span={24}>
                                    <DynamicChart data={graphData} field="heapTotal" />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Col>
        </Layout.Content>
    </Layout>;
}
