import React, {useEffect} from 'react';
import {
    Card,
    CardBody,
    CardHeader,
    CardTitle,
    Col,
    DropdownItem,
    DropdownMenu,
    DropdownToggle, Nav, NavItem, NavLink,
    Row,
    UncontrolledDropdown
} from 'reactstrap';

//redux
import { useSelector, useDispatch } from "react-redux";

//SimpleBar
import SimpleBar from "simplebar-react"
import paginationFactory, {
    PaginationListStandalone,
    PaginationProvider
} from "react-bootstrap-table2-paginator";
import ToolkitProvider, {Search} from "react-bootstrap-table2-toolkit";
import {Link} from "react-router-dom";
import BootstrapTable from "react-bootstrap-table-next";

import { getInvoices as onGetInvoices } from "../../store/actions";

const RecentActivity = () => {
    const dispatch = useDispatch();
    const { SearchBar } = Search;

    const { invoices } = useSelector((state) => ({
        invoices: state.invoices.invoices,
    }));

    useEffect(() => {
        dispatch(onGetInvoices());
    }, [dispatch]);

    const pageOptions = {
        sizePerPage: 7,
        totalSize: invoices.length, // replace later with size(users),
        custom: true,
    };

    const defaultSorted = [
        {
          dataField: "id", // if dataField is not match to any column you defined, it will be ignored.
          order: "desc", // desc or asc
        },
    ];

    const selectRow = {
        mode: "checkbox",
    };

    const invoicesListColumns = [
        {
          text: "id",
          dataField: "id",
          sort: true,
          hidden: true,
          formatter: (cellContent, invoices) => <>{invoices.invoiceId}</>,
        },
        {
          text: "Invoice ID",
          dataField: "id",
          sort: true,
          formatter: (cellContent, invoices) => <>{invoices.invoiceId}</>,
        },
        {
          text: "Date",
          dataField: "date",
          sort: true,
          formatter: (cellContent, invoices) => <>{invoices.date}</>,
        },
        {
          text: "Billing Name",
          dataField: "billing_name",
          sort: true,
          formatter: (cellContent, invoices) => <>{invoices.founder}</>,
        },
        {
          text: "Billing Name",
          dataField: "founder_name",
          sort: true,
          formatter: (cellContent, invoices) => <>{invoices.founder}</>,
        },
        {
          text: "Amount",
          dataField: "amount",
          sort: true,
          formatter: (cellContent, invoices) => <>{invoices.Amount}</>,
        },
        {
          text: "Status",
          dataField: "status",
          sort: true,
          formatter: (cellContent, invoices) => (
            <>
              <div
                className={"badge badge-soft-" + invoices.color + " font-size-12"}
              >
                {invoices.status}
              </div>
            </>
          ),
        },
        {
          text: "Download Pdf",
          dataField: "pdf",
          sort: true,
          formatter: () => (
            <>
              <div>
                <button
                  type="button"
                  className="btn btn-soft-light btn-sm w-xs waves-effect btn-label waves-light"
                >
                  <i className="bx bx-download label-icon"></i> Pdf
                </button>
              </div>
            </>
          ),
        },
    ];

    return (
        <React.Fragment>
            <Col xl={12}>
                <Card>
                    <CardHeader className="align-items-center d-flex">
                        <CardTitle className="mb-0 flex-grow-1">Recent Calls</CardTitle>
                        <div className="flex-shrink-0">
                            <SearchBar />
                            <i className="bx bx-search-alt search-icon-search" />
                        </div>
                    </CardHeader>

                    <CardBody className="px-0">
                        <PaginationProvider
                            pagination={paginationFactory(pageOptions)}
                          >
                            {({ paginationProps, paginationTableProps }) => (
                              <ToolkitProvider
                                keyField="id"
                                data={invoices}
                                columns={invoicesListColumns}
                                bootstrap4
                                search
                              >
                                {toolkitProps => (
                                  <React.Fragment>
                                    <Row className="mb-2">

                                      <Col sm="4">
                                        <div className="search-box ms-2 mb-2 d-inline-block">
                                          <div className="position-relative">

                                          </div>
                                        </div>
                                      </Col>
                                    </Row>
                                    <Row>
                                      <Col xl="12">
                                        <div className="table-responsive">
                                          <BootstrapTable
                                            {...toolkitProps.baseProps}
                                            {...paginationTableProps}
                                            selectRow={selectRow}
                                            defaultSorted={defaultSorted}
                                            classes={
                                              "table align-middle table-nowrap table-hover"
                                            }
                                            responsive
                                            bordered={false}
                                            striped={false}
                                          />
                                        </div>
                                      </Col>
                                    </Row>
                                    <Row className="align-items-md-center mt-30">
                                      <Col className="pagination pagination-rounded justify-content-end mb-2">
                                        <PaginationListStandalone
                                          {...paginationProps}
                                        />
                                      </Col>
                                    </Row>
                                  </React.Fragment>
                                )}
                              </ToolkitProvider>
                            )}
                          </PaginationProvider>
                    </CardBody>

                </Card>

            </Col>
        </React.Fragment>
    );
}

export default RecentActivity;