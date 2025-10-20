import {
  IGRPCardContentPrimitive,
  IGRPCardHeaderPrimitive,
  IGRPCardPrimitive,
  IGRPCardTitlePrimitive,
} from '@igrp/igrp-framework-react-design-system';

function DetailsReport() {
  return (
    <>
      {/* Detailed Reports */}
      <div className="grid gap-6 lg:grid-cols-3">
        <IGRPCardPrimitive>
          <IGRPCardHeaderPrimitive>
            <IGRPCardTitlePrimitive>Por Sector</IGRPCardTitlePrimitive>
          </IGRPCardHeaderPrimitive>
          <IGRPCardContentPrimitive>
            <div className="space-y-4">
              {[
                { sector: 'Turismo', count: 89, percentage: 31 },
                { sector: 'Serviços', count: 67, percentage: 23 },
                { sector: 'Indústria', count: 45, percentage: 15 },
                { sector: 'Energia', count: 34, percentage: 12 },
                { sector: 'Outros', count: 56, percentage: 19 },
              ].map((item) => (
                <div key={item.sector} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                    <span className="text-sm">{item.sector}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-medium">{item.count}</span>
                    <span className="text-xs text-muted-foreground ml-2">({item.percentage}%)</span>
                  </div>
                </div>
              ))}
            </div>
          </IGRPCardContentPrimitive>
        </IGRPCardPrimitive>

        <IGRPCardPrimitive>
          <IGRPCardHeaderPrimitive>
            <IGRPCardTitlePrimitive>Por Ilha</IGRPCardTitlePrimitive>
          </IGRPCardHeaderPrimitive>
          <IGRPCardContentPrimitive>
            <div className="space-y-4">
              {[
                { ilha: 'Santiago', count: 156, percentage: 54 },
                { ilha: 'Sal', count: 67, percentage: 23 },
                { ilha: 'São Vicente', count: 34, percentage: 12 },
                { ilha: 'Fogo', count: 23, percentage: 8 },
                { ilha: 'Outras', count: 11, percentage: 3 },
              ].map((item) => (
                <div key={item.ilha} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-chart-2" />
                    <span className="text-sm">{item.ilha}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-medium">{item.count}</span>
                    <span className="text-xs text-muted-foreground ml-2">({item.percentage}%)</span>
                  </div>
                </div>
              ))}
            </div>
          </IGRPCardContentPrimitive>
        </IGRPCardPrimitive>

        <IGRPCardPrimitive>
          <IGRPCardHeaderPrimitive>
            <IGRPCardTitlePrimitive>Origem do Capital</IGRPCardTitlePrimitive>
          </IGRPCardHeaderPrimitive>
          <IGRPCardContentPrimitive>
            <div className="space-y-4">
              {[
                { origem: 'Cabo Verde', count: 134, percentage: 46 },
                { origem: 'Portugal', count: 89, percentage: 31 },
                { origem: 'Brasil', count: 34, percentage: 12 },
                { origem: 'França', count: 23, percentage: 8 },
                { origem: 'Outros', count: 11, percentage: 3 },
              ].map((item) => (
                <div key={item.origem} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-chart-3" />
                    <span className="text-sm">{item.origem}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-medium">{item.count}</span>
                    <span className="text-xs text-muted-foreground ml-2">({item.percentage}%)</span>
                  </div>
                </div>
              ))}
            </div>
          </IGRPCardContentPrimitive>
        </IGRPCardPrimitive>
      </div>
    </>
  );
}

export { DetailsReport };
