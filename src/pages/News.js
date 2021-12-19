import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import news1 from "../images/news/news-1.jpg";
import news2 from "../images/news/news-2.jpg";
import news3 from "../images/news/news-3.jpg";
import news4 from "../images/news/news-4.jpg";
import news5 from "../images/news/news-5.jpg";
import news6 from "../images/news/news-6.jpg";
import news7 from "../images/news/news-7.jpg";
import news8 from "../images/news/news-8.jpg";

function News() {
    return (
        <div>
  
          <h1>News</h1>
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">4</a></li>
                </ul>
            </nav>

                <Container>
                  <Row>
                    <Col>
                      <Card className="mb-3">
                        <Card.Img src={news1} />
                        <Card.Body />
                        <Card.Title>
                          Nunc portitor vel
                        </Card.Title>
                        <Card.Text>
                          Nunc malesuada eget est fringilla dapibus
                        </Card.Text>
                          <Button variant="primary">MORE</Button>
                      </Card>
                    </Col>

                    <Col>
                      <Card className="mb-3">
                        <Card.Img src={news2} />
                        <Card.Body />
                        <Card.Title>
                          Nunc portitor vel
                        </Card.Title>
                        <Card.Text>
                          Nunc malesuada eget est fringilla dapibus
                        </Card.Text>
                          <Button variant="primary">MORE</Button>
                      </Card>
                    </Col>

                    <Col>
                      <Card className="mb-3">
                        <Card.Img src={news3} />
                        <Card.Body />
                        <Card.Title>
                          Nunc portitor vel
                        </Card.Title>
                        <Card.Text>
                          Nunc malesuada eget est fringilla dapibus
                        </Card.Text>
                          <Button variant="primary">MORE</Button>
                        </Card>
                    </Col>

                    <Col>
                      <Card className="mb-3">
                        <Card.Img src={news4} />
                          <Card.Body />
                          <Card.Title>
                            Nunc portitor vel
                          </Card.Title>
                          <Card.Text>
                            Nunc malesuada eget est fringilla dapibus
                          </Card.Text>
                            <Button variant="primary">MORE</Button>
                          </Card>
                    </Col>
                  </Row>

                  <Row>
                      <Col>
                        <Card className="mb-3">
                          <Card.Img src={news5} />
                          <Card.Body />
                          <Card.Title>
                            Nunc portitor vel
                          </Card.Title>
                          <Card.Text>
                            Nunc malesuada eget est fringilla dapibus
                          </Card.Text>
                            <Button variant="primary">MORE</Button>
                        </Card>
                      </Col>

                      <Col>
                        <Card className="mb-3">
                          <Card.Img src={news6} />
                          <Card.Body />
                          <Card.Title>
                            Nunc portitor vel
                          </Card.Title>
                          <Card.Text>
                            Nunc malesuada eget est fringilla dapibus
                          </Card.Text>
                            <Button variant="primary">MORE</Button>
                        </Card>
                      </Col>

                      <Col>
                        <Card className="mb-3">
                          <Card.Img src={news7} />
                          <Card.Body />
                          <Card.Title>
                            Nunc portitor vel
                          </Card.Title>
                          <Card.Text>
                            Nunc malesuada eget est fringilla dapibus
                          </Card.Text>
                            <Button variant="primary">MORE</Button>
                          </Card>
                      </Col>

                      <Col>
                        <Card className="mb-3">
                          <Card.Img src={news8} />
                            <Card.Body />
                            <Card.Title>
                              Nunc portitor vel
                            </Card.Title>
                            <Card.Text>
                              Nunc malesuada eget est fringilla dapibus
                            </Card.Text>
                              <Button variant="primary">MORE</Button>
                            </Card>
                      </Col>
                  </Row>
                </Container>

                <nav aria-label="Page navigation example">
                  <ul class="pagination">
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">4</a></li>
                  </ul>
                </nav>
        </div>
    )
}

export default News;
