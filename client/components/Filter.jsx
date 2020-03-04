import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import Category from './Category.jsx';
import Location from './Location.jsx';
import Cost from './Cost.jsx';
import PrivateOrPublic from './PrivateOrPublic.jsx';
import NumberOfPeople from './NumberOfPeople.jsx';
import TimeOfDay from './TimeOfDay.jsx';

const Filter = ({
  handleFilterCityChange,
  filterCityValue,
  handleFilterStateChange,
  filterStateValue,
  handleFilterCategoryChange,
  filterCategoryValue,
  handleFilterNumOfPeopleChange,
  filterNumOfPeopleValues,
  handleFilterCostChange,
  filterCostValue,
  handleFilterPublicChange,
  filterPublicValue,
  handleFilterPrivateChange,
  filterPrivateValue,
  handleFilterToDChange,
  filterToDValue,
  handleFilterSubmit,
  filterDropdownCategories,
}) => (
  <div className="filter-container">
    <h3>Filter Events:</h3>
    <Accordion>
      <Card>
        <Card.Header>
          {/* <Accordion.Toggle as={Button} variant={Card.Header} eventKey="0"> */}
          Location
          {/* </Accordion.Toggle> */}
        </Card.Header>
        {/* <Accordion.Collapse eventKey="0"> */}
        <Card.Body>
          <Location
            handleFilterCityChange={handleFilterCityChange}
            filterCityValue={filterCityValue}
            handleFilterStateChange={handleFilterStateChange}
            filterStateValue={filterStateValue}
          />
        </Card.Body>
        {/* </Accordion.Collapse> */}
      </Card>

      <Card>
        <Card.Header>
          {/* <Accordion.Toggle as={Button} variant={Card.Header} eventKey="1"> */}
          Category
          {/* </Accordion.Toggle> */}
        </Card.Header>
        {/* <Accordion.Collapse eventKey="1"> */}
        <Card.Body>
          <Category
            handleFilterCategoryChange={handleFilterCategoryChange}
            filterCategoryValue={filterCategoryValue}
            filterDropdownCategories={filterDropdownCategories}
          />
        </Card.Body>
        {/* </Accordion.Collapse> */}
      </Card>

      <Card>
        <Card.Header>
          {/* <Accordion.Toggle as={Button} variant={Card.Header} eventKey="2"> */}
          # Attending
          {/* </Accordion.Toggle> */}
        </Card.Header>
        {/* <Accordion.Collapse eventKey="2"> */}
        <Card.Body>
          <NumberOfPeople
            handleFilterNumOfPeopleChange={handleFilterNumOfPeopleChange}
            filterNumOfPeopleValues={filterNumOfPeopleValues}
          />
        </Card.Body>
        {/* </Accordion.Collapse> */}
      </Card>

      <Card>
        <Card.Header>
          {/* <Accordion.Toggle as={Button} variant={Card.Header} eventKey="3"> */}
          Cost
          {/* </Accordion.Toggle> */}
        </Card.Header>
        {/* <Accordion.Collapse eventKey="3"> */}
        <Card.Body>
          <Cost
            handleFilterCostChange={handleFilterCostChange}
            filterCostValue={filterCostValue}
          />
        </Card.Body>
        {/* </Accordion.Collapse> */}
      </Card>

      <Card>
        <Card.Header>
          {/* <Accordion.Toggle as={Button} variant={Card.Header} eventKey="4"> */}
          Public/Private
          {/* </Accordion.Toggle> */}
        </Card.Header>
        {/* <Accordion.Collapse eventKey="4"> */}
        <Card.Body>
          <PrivateOrPublic
            handleFilterPublicChange={handleFilterPublicChange}
            filterPublicValue={filterPublicValue}
            handleFilterPrivateChange={handleFilterPrivateChange}
            filterPrivateValue={filterPrivateValue}
          />
        </Card.Body>
        {/* </Accordion.Collapse> */}
      </Card>

      <Card>
        <Card.Header>
          {/* <Accordion.Toggle as={Button} variant={Card.Header} eventKey="5"> */}
          Time
          {/* </Accordion.Toggle> */}
        </Card.Header>
        {/* <Accordion.Collapse eventKey="5"> */}
        <Card.Body>
          <TimeOfDay handleFilterToDChange={handleFilterToDChange} filterToDValue={filterToDValue} />
        </Card.Body>
        {/* </Accordion.Collapse> */}
      </Card>

      <Button onClick={() => handleFilterSubmit()}>Submit Filters</Button>

    </Accordion>
  </div>
);

export default Filter;
