import * as React from 'react';

import { IMenuInstrumentosComunicacaoDiretoresProps } from './IMenuInstrumentosComunicacaoDiretoresProps';
import MenuICDiretores from './MenuICDiretores/MenuICDiretores';

export default class MenuInstrumentosComunicacaoDiretores extends React.Component<IMenuInstrumentosComunicacaoDiretoresProps, {}> {
  public render(): React.ReactElement<IMenuInstrumentosComunicacaoDiretoresProps> {

    return <MenuICDiretores absoluteUrl={this.props.absoluteUrl} webpartTitle={this.props.description}/>;
  }
}
