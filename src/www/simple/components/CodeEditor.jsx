import React from 'react';

import { parser } from "../../../basm/parser.js";
import { assemble } from "../../../basm/assemble.js";

export class CodeEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            code: props.store.code,
            log: ""
        };

        this.codeChanged = this.codeChanged.bind(this);
        this.assembleClicked = this.assembleClicked.bind(this);
    }
    codeChanged(e) {
        const { store }  = this.props;
        const code = e.target.value;
        store.code = code;
        this.setState({code});
    }
    assembleClicked() {
        const { store } = this.props;
        const { code, computer } = store;

        const asm = code;
        const memory = computer.memory;
        try {
            const ast = parser.parse(asm);
            const segments = assemble(ast);
            segments.forEach(segment => {
                const data = segment.data;
                const name = segment.name;
                data.forEach((byte, idx) => memory.writeByte(segment.addr + idx, byte));
            });
            this.setState({log: "Assembled successfully.\n"});
        } catch (e) {
            this.setState({log: e.message});
        }
    }
    render() {
        const { code, log } = this.state;
        return (
            <div className="panel column">
                <button className="nogrow noshrink" onClick={this.assembleClicked}>Assemble</button>
                <textarea className="grow shrink" onChange={this.codeChanged}>{code}</textarea>
                <code className="nogrow noshrink" style={{whiteSpace: "pre-wrap"}}>{log}</code>
            </div>
        );
    }
}