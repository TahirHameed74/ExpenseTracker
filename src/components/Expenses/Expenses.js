import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import "./Expenses.css";
import ExpenseChart from "./ExpensesChart";
const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState("2020");

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};
	const FilteredExpense = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter
					selected={filteredYear}
					onChangeFilter={filterChangeHandler}
				/>
				<ExpenseChart expenses={FilteredExpense} />
				{FilteredExpense.length === 0 ? (
					<>
						<p>No Expense Found</p>
					</>
				) : (
					<>
						{FilteredExpense.map((item) => (
							<ExpenseItem
								key={item.id}
								title={item.title}
								amount={item.amount}
								date={item.date}
							/>
						))}
					</>
				)}
			</Card>
		</div>
	);
};

export default Expenses;
