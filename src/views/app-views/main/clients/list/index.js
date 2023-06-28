import React, { Component } from "react";
import { Card, Table, Tooltip, message, Button, Modal } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import AvatarStatus from "components/shared-components/AvatarStatus";
import clientData from "assets/data/client-list.data.json";
import EditClient from "./EditClient";
import defaultAvatar from "assets/images/default.jpg";

class ClientList extends Component {
  state = {
    clients: clientData,
    clientProfileOpen: false,
    selectedCLient: null,
  };

  deleteClient = (clientId) => {
    this.setState({
      clients: this.state.clients.filter((item) => item.id !== clientId),
    });
    message.success({ content: `Deleted client ${clientId}`, duration: 2 });
  };

  showClientProfile = (clientInfo) => {
    this.setState({
      clientProfileOpen: true,
      selectedClient: clientInfo,
    });
  };

  closeUserProfile = () => {
    this.setState({
      clientProfileOpen: false,
      selectedClient: null,
    });
  };

  render() {
    const { clients, clientProfileOpen, selectedClient } = this.state;
    // const defaultAvatar = "/img/avatars/default.jpg";

    const tableColumns = [
      {
        title: "Username",
        dataIndex: "username",
        render: (_, record) => (
          <div className="d-flex">
            <AvatarStatus
              src={defaultAvatar}
              name={record.username}
              subTitle={record.email}
            />
          </div>
        ),
        sorter: {
          compare: (a, b) => {
            a = a.username.toLowerCase();
            b = b.username.toLowerCase();
            return a > b ? -1 : b > a ? 1 : 0;
          },
        },
      },
      {
        title: "Name",
        dataIndex: "name",
        sorter: {
          compare: (a, b) => {
            a = a.name.toLowerCase();
            b = b.name.toLowerCase();
            return a > b ? -1 : b > a ? 1 : 0;
          },
        },
      },
      {
        title: "Address",
        dataIndex: "address",
        render: (address) => (
          <div>
            <div>{address.street}</div>
            <div>{address.suite}</div>
            <div>{address.city}</div>
            <div>{address.zipcode}</div>
          </div>
        ),
        sorter: {
          compare: (a, b) => {
            const aAddress = `${a.address.city} ${a.address.street} ${a.address.suite} ${a.address.zipcode}`;
            const bAddress = `${b.address.city} ${b.address.street} ${b.address.suite} ${b.address.zipcode}`;
            return aAddress.localeCompare(bAddress);
          },
        },
      },
      {
        title: "Website",
        dataIndex: "website",
        sorter: {
          compare: (a, b) => {
            const aWebsite = a.website.toLowerCase();
            const bWebsite = b.website.toLowerCase();
            return aWebsite.localeCompare(bWebsite);
          },
        },
      },
      {
        title: "Company",
        dataIndex: "company",
        render: (company) => (
          <div>
            <div>{company.name}</div>
            <div>{company.catchPhrase}</div>
            <div>{company.bs}</div>
          </div>
        ),
        sorter: {
          compare: (a, b) => {
            const aCompany = `${a.company.name} ${a.company.catchPhrase} ${a.company.bs}`;
            const bCompany = `${b.company.name} ${b.company.catchPhrase} ${b.company.bs}`;
            return aCompany.localeCompare(bCompany);
          },
        },
      },
      {
        title: "",
        dataIndex: "actions",
        render: (_, elm) => (
          <div className="text-right">
            <Tooltip title="View">
              <Button
                type="primary"
                className="mr-2"
                icon={<EditOutlined />}
                onClick={() => {
                  console.log("elm", elm);
                  this.showClientProfile(elm);
                }}
                size="small"
              />
            </Tooltip>
            <Tooltip title="Delete">
              <Button
                danger
                icon={<DeleteOutlined />}
                onClick={() => {
                  this.deleteClient(elm.id);
                }}
                size="small"
              />
            </Tooltip>
          </div>
        ),
      },
    ];
    console.log("101", clientProfileOpen);
    console.log("selectedClient", selectedClient);
    return (
      <Card bodyStyle={{ padding: "0px" }}>
        <Table columns={tableColumns} dataSource={clients} rowKey="id" />
        {clientProfileOpen && (
          <EditClient
            data={selectedClient}
            open={clientProfileOpen}
            close={() => {
              this.closeUserProfile();
            }}
          />
        )}
      </Card>
    );
  }
}

export default ClientList;
