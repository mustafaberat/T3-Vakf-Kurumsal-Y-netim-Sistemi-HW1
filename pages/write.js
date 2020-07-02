import React from 'react';

import Head from 'next/head';

export default function Write() {
    return (
        <div className="container">
            <Head>
                <title>T3 KYS HW1</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous" />
            </Head>
            <br />

            <main className="myform">
                <form class="needs-validation" novalidate>
                    <div class="form-group">
                        <label for="exampleFormControlSelect1">Project Type</label>
                        <select class="form-control" id="exampleFormControlSelect1">
                            <option>Type1</option>
                            <option>Type2</option>
                        </select>
                    </div>

                    <label for="exampleFormControlSelect1">Type 1</label>
                    <div class="form-row">
                        <div class="col">
                            <input type="text" class="form-control" placeholder="CH3NH2" />
                        </div>
                        <div class="col">
                            <input type="text" class="form-control" placeholder="HCOOH" />
                        </div>
                        <div class="col">
                            <input type="text" class="form-control" placeholder="NA2CO3" />
                        </div>
                    </div>
                    <br />
                    <div class="form-group row">
                        <div class="col-sm-2">Type 2</div>
                        <div class="col-sm-10">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck1" />
                                <label class="form-check-label" for="gridCheck1">
                                    Result has
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck2" />
                                <label class="form-check-label" for="gridCheck2">
                                    Equal to expected
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="exampleFormControlInput1">Project Name</label>
                        <input required class="form-control" id="exampleFormControlInput1" />
                    </div>

                    <div class="form-group">
                        <label for="exampleFormControlInput1">Project Start Date</label>
                        <input required class="form-control" id="exampleFormControlInput1" placeholder="mm/dd/yyyy" />
                    </div>

                    <div class="form-group">
                        <label for="exampleFormControlInput1">Responsible Employee</label>
                        <input required class="form-control" id="exampleFormControlInput1" />
                    </div>

                    <div class="form-group">
                        <label for="exampleFormControlInput1">Budget</label>
                        <input required class="form-control" id="exampleFormControlInput1" placeholder="10$" />
                    </div>

                    <div class="form-group">
                        <label for="exampleFormControlInput1">Budget</label>
                        <input class="form-control" id="exampleFormControlInput1" />
                    </div>

                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Project Statues</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>

                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Notes</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>

                    <button class="btn btn-primary mb-2">Submit</button>
                </form>

                <div style={{ marginLeft: "auto", display: "flex" }}>
                    <a class="btn btn-danger mb-2" href="/" style={{ marginRight: "10px", marginLeft: "auto" }}>Home Page</a>
                    <a class="btn btn-danger mb-2" href="/read">Read Data</a>
                </div>
            </main>

            <footer style={{ marginLeft: "auto", display: "flex" }}>
                <a style={{ marginLeft: "auto" }} href="https://github.com/mustafaberat/T3-Vakfi-Kurumsal-Yonetim-Sistemi-HW1">Github Link</a>
            </footer>
            <br />
        </div>
    )
}
<style jsx>{`
  .container {
    padding: 0 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`}</style>