import * as React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import { withApollo } from 'react-apollo';

import { GET_ADMISSION_ENQUIRY_LIST } from '../_queries';
import AdmissionEnquiryPage from './EnquiryPage';
import  {EnquiryGrid} from './EnquiryGrid'
import {commonFunctions} from '../_utilites/common.functions';

class AdmissionEnquiry extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            activeTab: 0,
            enquiryList: null
        };
        this.toggleTab = this.toggleTab.bind(this); 
    }

    async toggleTab (tabNo: any, eqs: any) {
        this.setState({
            enquiryList: null,
            activeTab: tabNo,            
        });
        
        let bid = 34; 
        let aid = 56; 
        
        if(tabNo === 1 || tabNo === 2 || tabNo === 3 || tabNo === 4 || tabNo === 5){
            const { data } = await this.props.client.query({
                query: GET_ADMISSION_ENQUIRY_LIST,
                variables: { 
                    branchId: bid,
                    academicYearId: aid,
                    enquiryStatus: eqs
                 },
                 fetchPolicy: 'no-cache'
            })
            
            this.setState({
                enquiryList: data,
            });
        }
        this.setState({
            activeTab: tabNo,
        });
    }

    render() {
        const { activeTab, enquiryList} = this.state;
        return (
            <section className="tab-container row vertical-tab-container">
                <Nav tabs className="pl-3 pl-3 mb-4 mt-4 col-sm-2">
                    <NavItem className="cursor-pointer">
                        <NavLink className={`vertical-nav-link ${activeTab === 0 ? 'side-active' : ''}`} onClick={() => { this.toggleTab(0, ''); }} >
                            New Enquiry
                        </NavLink>
                    </NavItem>
                    <NavItem className="cursor-pointer">
                        <NavLink className={`vertical-nav-link ${activeTab === 1 ? 'side-active' : ''}`} onClick={() => { this.toggleTab(1, 'RECEIVED'); }} >
                            Received
                        </NavLink>
                    </NavItem>
                    <NavItem className="cursor-pointer">
                        <NavLink className={`vertical-nav-link ${activeTab === 2 ? 'side-active' : ''}`} onClick={() => { this.toggleTab(2, 'FOLLOWUP'); }} >
                            Follow Up
                        </NavLink>
                    </NavItem>
                    <NavItem className="cursor-pointer">
                        <NavLink className={`vertical-nav-link ${activeTab === 3 ? 'side-active' : ''}`} onClick={() => { this.toggleTab(3, 'DECLINED'); }} >
                            Declined
                        </NavLink>
                    </NavItem>
                    <NavItem className="cursor-pointer">
                        <NavLink className={`vertical-nav-link ${activeTab === 4 ? 'side-active' : ''}`} onClick={() => { this.toggleTab(4, 'CONVERTED_TO_ADMISSION'); }} >
                            Admission Granted
                        </NavLink>
                    </NavItem>
                    <NavItem className="cursor-pointer">
                        <NavLink className={`vertical-nav-link ${activeTab === 5 ? 'side-active' : ''}`} onClick={() => { this.toggleTab(5, null); }} >
                            Total Enquiry
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={activeTab} className="col-sm-9 border-left p-t-1">
                    <TabPane tabId={0}>
                        <AdmissionEnquiryPage operationType={"ADD"} ></AdmissionEnquiryPage>
                    </TabPane>
                    <TabPane tabId={1}>
                        {
                            enquiryList !== null && (
                                <EnquiryGrid type="Total Received" totalRecords={enquiryList.getAdmissionEnquiryList.length} data={enquiryList.getAdmissionEnquiryList}></EnquiryGrid>
                            )
                        } 
                    </TabPane>
                    <TabPane tabId={2}>
                        {
                            enquiryList !== null && (
                                <EnquiryGrid type="Total Follow Up" totalRecords={enquiryList.getAdmissionEnquiryList.length} data={enquiryList.getAdmissionEnquiryList}></EnquiryGrid>
                            )
                        } 
                    </TabPane>
                    <TabPane tabId={3}>
                        {
                            enquiryList !== null && (
                                <EnquiryGrid type="Total Declined" totalRecords={enquiryList.getAdmissionEnquiryList.length} data={enquiryList.getAdmissionEnquiryList}></EnquiryGrid>
                            )
                        } 
                    </TabPane>
                    <TabPane tabId={4}>
                        {
                            enquiryList !== null && (
                                <EnquiryGrid type="Total Admission Granted" totalRecords={enquiryList.getAdmissionEnquiryList.length} data={enquiryList.getAdmissionEnquiryList}></EnquiryGrid>
                            )
                        } 
                    </TabPane>
                    <TabPane tabId={5}>
                        {
                            enquiryList !== null && (
                                <EnquiryGrid type="Total Enquiries" totalRecords={enquiryList.getAdmissionEnquiryList.length} data={enquiryList.getAdmissionEnquiryList}></EnquiryGrid>
                            )
                        }                        
                    </TabPane>
                </TabContent>
            </section>
        );
    }
};

export default withApollo(AdmissionEnquiry)