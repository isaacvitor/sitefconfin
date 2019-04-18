const _s = require('lodash/string');
const moment = require('moment');

const _dataType = {
  n: {
    ordinator: _s.padStart,
    complement: '0'
  },
  a: {
    ordinator: _s.padEnd,
    complement: ' ' //Here is a TRUE BLANK SPACE pay attention!
  },
  m: {
    ordinator: _s.padStart,
    complement: '0',
    preFormat: v =>
      v > 0
        ? Number(v)
            .toFixed(2)
            .replace('.', '')
        : v
  },
  c: {
    ordinator: _s.padStart,
    complement: '0',
    preFormat: card => {
      let maskedCardNumber;
      card = card.toString();
      mask = l => {
        let m = '';
        let a = 1;
        while (a <= l) {
          m = m + '*';
          a++;
        }
        return m;
      };
      if (card.length >= 16) {
        maskedCardNumber = `${card.substr(0, 6)}${mask(card.length - 10)}${card.substr(
          card.length - 4,
          4
        )}`;
      } else if (card.length >= 13 || card.length < 16) {
        maskedCardNumber = `${card.substr(0, 4)}${mask(card.length - 8)}${card.substr(
          card.length - 4,
          4
        )}`;
      } else if (card.length < 13) {
        maskedCardNumber = card;
      }
      return maskedCardNumber;
    }
  },
  d: {
    ordinator: _s.padStart,
    complement: '0',
    preFormat: d => {
      try {
        return moment(d).format('YYYYMMDD');
      } catch (e) {
        console.log('preFormat', e.message);
        return null;
      }
    }
  },
  h: {
    ordinator: _s.padStart,
    complement: '0',
    preFormat: d => {
      try {
        return moment(d).format('HHmmss');
      } catch (e) {
        console.log('preFormat', e.message);
        return null;
      }
    }
  }
};

exports.properties = {
  version: '001.7d',
  sequenceSize: 6,
  sequenceComplement: 0,
  breakLine: '\r\n',
  breakLastLine: false,
  encoding: { content: 'ascii', file: 'ascii' }
};

exports.a0 = [
  { position: '001002', type: _dataType.a, description: 'Código do registro' },
  { position: '003008', type: _dataType.a, description: 'Versão do Layout' },
  { position: '009016', type: _dataType.d, description: 'Data da geraçao do arquivo' },
  { position: '017022', type: _dataType.h, description: 'Hora da geração do arquivo' },
  { position: '023028', type: _dataType.n, description: 'Identificação sequencial do Movimento' },
  { position: '029058', type: _dataType.a, description: 'Nome da Administradora' },
  { position: '059062', type: _dataType.n, description: 'Identificação do Remetente' },
  { position: '063068', type: _dataType.n, description: 'Identificação do Destinatário' },
  { position: '069069', type: _dataType.a, description: 'Tipo do processamento' },
  { position: '070075', type: _dataType.n, description: 'Número sequencial do registro' }
];

exports.l0 = [
  { position: '001002', type: _dataType.a, description: 'Header de lote de vendas' },
  { position: '003010', type: _dataType.d, description: 'Data da movimento do lote' },
  {
    position: '011012',
    type: _dataType.a,
    description: 'Moeda corrente, RE = real, DO = Dolar, PO = Peso'
  },
  { position: '013018', type: _dataType.n, description: 'Número sequencial do registro' }
];

exports.cv = [
  { position: '001002', type: _dataType.a, description: 'Registro de comprovante de venda' },
  { position: '003017', type: _dataType.n, description: 'Identificação da loja' },
  { position: '018029', type: _dataType.n, description: 'NSU host da transação' },
  { position: '030037', type: _dataType.d, description: 'Data da transação' },
  { position: '038043', type: _dataType.h, description: 'Horário da transação' },
  {
    position: '044044',
    type: _dataType.n,
    description: 'Tipo lançamento, 0 = previsao, 1 = liquidacao normal, 2 = liquidacao antecipada'
  },
  { position: '045052', type: _dataType.d, description: 'Data de lançamento/pagamento a loja' },
  {
    position: '053053',
    type: _dataType.a,
    description: 'Tipo do produto, C= Drédito, D=Débito, V=Voucher'
  },
  {
    position: '054054',
    type: _dataType.n,
    description:
      'Meio de captura, 1=manual, 2=pos, 3=pdv, 4=trn off, 5=internet, 6=ura,8=indefinido'
  },
  { position: '055065', type: _dataType.m, description: 'Valor bruto da venda' },
  { position: '066076', type: _dataType.m, description: 'Valor do desconto' },
  { position: '077087', type: _dataType.m, description: 'Valor liquido da venda' },
  { position: '088106', type: _dataType.c, description: 'Número do cartão - Deve ser mascarado' },
  { position: '107108', type: _dataType.n, description: 'Número da parcela' },
  { position: '109110', type: _dataType.n, description: 'Número total de parcelas' },
  {
    position: '111122',
    type: _dataType.n,
    description: 'NSU Host da Transação, zeros para à vista'
  },
  {
    position: '123133',
    type: _dataType.m,
    description: 'Valor bruto da parcela, zeros para à vista'
  },
  { position: '134144', type: _dataType.m, description: 'Valor do desconto, zeros para à vista' },
  {
    position: '145155',
    type: _dataType.m,
    description: 'Valor liquido da parcela, zeros para à vista'
  },
  { position: '156158', type: _dataType.n, description: 'Banco para deposito' },
  { position: '159164', type: _dataType.n, description: 'Agência para deposito' },
  { position: '165175', type: _dataType.a, description: 'Conta Corrente para deposito' },
  { position: '176187', type: _dataType.n, description: 'Código de autorização' },
  { position: '188190', type: _dataType.n, description: 'Código da bandeira' },
  { position: '191193', type: _dataType.n, description: 'Código do produto' },
  { position: '194199', type: _dataType.n, description: 'Número sequencial do registro' }
];

exports.aj = [
  { position: '001002', type: _dataType.a, description: 'Registro de ajuste' },
  { position: '003017', type: _dataType.n, description: 'Identificação da loja' },
  { position: '018029', type: _dataType.n, description: 'NSU host da transação' },
  { position: '030037', type: _dataType.d, description: 'Data da transação' },
  { position: '038039', type: _dataType.n, description: 'Número da parcela, zero à vista' },
  { position: '040051', type: _dataType.n, description: 'NSU Host da transação' },
  { position: '052059', type: _dataType.d, description: 'Data da transação AJ' },
  { position: '060065', type: _dataType.h, description: 'Hora da transação AJ' },
  {
    position: '066066',
    type: _dataType.n,
    description: 'Tipo de lançamento, 0=previsao, 1=liquidacao, 2=liquidacao antecipada'
  },
  {
    position: '067074',
    type: _dataType.d,
    description: 'Data de lançamento contábil da transção de ajuste'
  },
  {
    position: '075075',
    type: _dataType.n,
    description:
      'Meio de captura, 1=manual, 2=pos, 3=pdv, 4=trn off, 5=internet, 6=ura,8=indefinido'
  },
  {
    position: '076076',
    type: _dataType.n,
    description: 'Tipo de ajuste, 1=ajuste credito, 2=ajuste debito'
  },
  { position: '077079', type: _dataType.n, description: 'Código de ajuste' },
  { position: '080109', type: _dataType.a, description: 'Descriçao do motivo do ajuste' },
  { position: '110120', type: _dataType.m, description: 'Valor bruto' },
  { position: '121131', type: _dataType.m, description: 'Valor do desconto' },
  { position: '132142', type: _dataType.m, description: 'Valor liquido' },
  { position: '143145', type: _dataType.n, description: 'Banco' },
  { position: '146151', type: _dataType.n, description: 'Agência' },
  { position: '152162', type: _dataType.a, description: 'Conta corrente' },
  { position: '163181', type: _dataType.c, description: 'Número do cartão' },
  { position: '182184', type: _dataType.n, description: 'Código da bandeira' },
  { position: '185187', type: _dataType.n, description: 'Código do produto' },
  { position: '188193', type: _dataType.n, description: 'Número sequencial do registro' }
];

exports.cc = [
  { position: '001002', type: _dataType.a, description: 'Registro de cancelamento' },
  { position: '003017', type: _dataType.n, description: 'Identificação da loja' },
  { position: '018029', type: _dataType.n, description: 'NSU host da transação original' },
  { position: '030037', type: _dataType.d, description: 'Data da transação' },
  { position: '038039', type: _dataType.n, description: 'Número da parcela, zero à vista' },
  { position: '040051', type: _dataType.n, description: 'NSU Host da transação' },
  { position: '052059', type: _dataType.d, description: 'Data da transação CC' },
  { position: '060065', type: _dataType.h, description: 'Hora da transação CC' },
  {
    position: '066066',
    type: _dataType.n,
    description:
      'Meio de captura, 1=manual, 2=pos, 3=pdv, 4=trn off, 5=internet, 6=ura,8=indefinido'
  },
  { position: '067072', type: _dataType.n, description: 'Número sequencial do registro' }
];

exports.l9 = [
  { position: '001002', type: _dataType.a, description: 'Registro de lote' },
  { position: '003008', type: _dataType.n, description: 'Total de registros' },
  {
    position: '009022',
    type: _dataType.m,
    description: 'Total de valores CV - CP + PF + AJc - AJd'
  },
  { position: '023028', type: _dataType.n, description: 'Número sequencial do registro' }
];

exports.a9 = [
  { position: '001002', type: _dataType.a, description: 'Registro de fim de arquivo' },
  { position: '003008', type: _dataType.n, description: 'Total de registros' },
  { position: '009014', type: _dataType.n, description: 'Número sequencial do registro' }
];
