
import React from "react";
import MaterialTable from "@material-table/core";
import { ExportCsv, ExportPdf } from "@material-table/exporters";
import { blue } from "@mui/material/colors";

function InformesColeccion(props) {
    

    const col = [
        { title: "Nombre", field: "nombre",filtering:false},
        { title: "Marca", field: "marca" },
        { title: "Tipo", field: "tipo" },
        { title: "Precio", field: "precio",filtering:false}
        ];
    
    console.log(props)


    return (<>

        <MaterialTable
            columns={col} data={props.AAA}
            title="Tabla"
           
            renderSummaryRow = {({column,data}) =>
            column.field === 'precio'
            ?{
                value:data.reduce((agg,row) => agg + row.precio,0),
                style: { background: "#06290B"},
            }
            :undefined
            }

            //Esto de aquí abajo es lo nuevo. Dentro de options pondremos la parte de exportación
            options={{
                exportMenu: [
                {
                label: "Export PDF",
                exportFunc: (cols, datas) => ExportPdf(cols, datas, "TablaPdf"),
                },
                {
                label: "Export CSV",
                exportFunc: (cols, datas) => ExportCsv(cols, datas, "TablaCsv"),
                },
                {
                    headerStyle: {
                        backgroundColor: blue,
                        color: blue
                       }
                }
                ],
                draggable: true,
                    columnsButton: true,
                    filtering: true
            }}
    />
    </>)

}
export default InformesColeccion
