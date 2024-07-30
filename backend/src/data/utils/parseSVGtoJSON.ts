
export const parseSVGtoJSON = async (data: any)=> {

    let parsedData: any = []
        let finalParsedData: any =[]

        const lines = data.file.toString("utf-8").split('\n');
        const headers = lines[0].split(';')

        lines.slice(1).map((line: string) => {

            if(!!line) {
                const values = line.split(';');

                headers.map((header: string, index: number) => {

                    parsedData.push({
                        
                      [header.trim().replace(/[\r\n']+/g, '')]: values[index].trim().replace(/[\r\n]+/g, '')

                    })

                })
                finalParsedData.push( Object.assign({}, ...parsedData))
            }
        })

        return finalParsedData
    }