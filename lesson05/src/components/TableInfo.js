import React from 'react';
import '../css/App.css';
import DataTable from "react-data-table-component";
import {Button, Spinner} from 'react-bootstrap';

class TableInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            columns: [

                {
                    name: "Country",
                    selector: "Country",
                    sortable: true,
                },
                {
                    name: "Date",
                    selector: "Date",
                    sortable: true,
                },
                {
                    name: "Confirmed",
                    selector: "Confirmed",
                    sortable: true,
                },
                {
                    name: "Recovered",
                    selector: "Recovered",
                    sortable: true,
                },
                {
                    name: "Active",
                    selector: "Active",
                    sortable: true,
                },
                {
                    name: "Deaths",
                    selector: "Deaths",
                    sortable: true,
                },

            ],
        };
    }

    retrieve_data() {
        this.setState({
            isLoaded: !this.state.isLoaded,
        });
        fetch('https://api.covid19api.com/live/country/malaysia/status/confirmed')
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    this.setState({
                        isLoaded: true,
                        items: result,
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    componentDidMount() {
        this.retrieve_data = this.retrieve_data.bind(this);

        this.retrieve_data()
    }

    componentDidUpdate(prevState) {
        console.log(prevState)
    }

    render() {
        const {error, isLoaded, items, columns} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div><Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner></div>;
        } else {
            return (
                <div>
                    <Button onClick={this.retrieve_data}>Refresh</Button>
                    <DataTable
                        title="Employee"
                        columns={columns}
                        data={items}
                        // fixedHeader={true}
                        // pagination={true}
                        // paginationPerPage={10}
                        highlightOnHover={true}
                        pointerOnHover={true}
                        // theme={'default'}
                    ></DataTable>
                </div>
                // <table>
                //   {items.map(item => (
                //     <tr key={item.id}>
                //       <td>{item.employee_name} </td>
                //       <td>{item.employee_salary}</td>
                //     </tr>
                //   ))}
                // </table>
            );
        }
    }
}

export default TableInfo;