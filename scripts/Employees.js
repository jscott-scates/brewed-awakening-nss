import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()


document.addEventListener(
    "click",
    (employeeClickEvent) => {
        const employeeClicked = employeeClickEvent.target
        const employeeClickedType = employeeClicked.dataset.type
        const employeeClickedID = employeeClicked.dataset.id
        const employeeClickedName = employeeClicked.dataset.name

        if(employeeClickedType === "employee"){
            let employeeOrderCounter = 0
            const orders = getOrders()

            for (const order of orders) {
                if(parseInt(employeeClickedID) === order.employeeId){
                    employeeOrderCounter++
                }
            }
            window.alert(`${employeeClickedName} sold ${employeeOrderCounter} products.`)
        }


    }
)

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `
        <li
        data-type="employee"
        data-id="${employee.id}"
        data-name="${employee.name}">
            ${employee.name}
        </li>`
    }

    html += "</ul>"

    return html
}

