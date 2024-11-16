

export default function Bootsrapp() {



    // container  lg sm md xl xxl

    // col
    // col-2

    // row
    // row-cols-2 upto 12
    // offset-2
    // g gx gy upto 5

    //8 colour primary secondary success danger warning info light dark
    //table-striped,table-striped-columns,table-hover ,table-bordered,table-borderless
    //table-responsive-lg

    //form-select form-cheack form-switch form-check-input form-check-label


    return (
        <div>

            <div className="container">
                <div className="row row-cols-2 gy-2">
                    <div className="col" style={{ border: "2px solid black" }}>
                        hello
                    </div>
                    <div className="col" style={{ border: "2px solid black" }}>
                        hello
                    </div>
                    <div className="col " style={{ border: "2px solid black" }}>
                        hello
                    </div>

                </div>

                <div className="table-responsive" >
                    <table
                        className="table table-primary"
                    >
                        <thead>
                            <tr>
                                <th scope="col">Column 1</th>
                                <th scope="col">Column 2</th>
                                <th scope="col">Column 3</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            <tr className="">
                                <td scope="row">R1C1</td>
                                <td>R1C2</td>
                                <td>R1C3</td>
                            </tr>
                            <tr className="">
                                <td scope="row">Item</td>
                                <td>Item</td>
                                <td>Item</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="mb-3">

                    <label for="" className="form-label">Password</label>

                    <input
                        type="password"
                        className="form-control"
                        name=""
                        id=""
                        placeholder=""
                    />
                    <input type="range" className="form-range"></input>

                    <input type="color" className="form-control-color"></input>

                    <button className="btn btn-primary">Submit</button>

                </div>


                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">@</span>
                    </div>
                    <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>



            </div>
        </div>

    );
}