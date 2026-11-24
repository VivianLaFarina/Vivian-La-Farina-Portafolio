export default {
  "iceberg": {
    "date": "2026-03-04",
    "source": "https://www.snowflake.com/en/blog/apache-iceberg-v3-support/",
    "title": {
      "en": "Apache Iceberg v3: why open tables matter to data architects",
      "es": "Apache Iceberg v3: por qué importan las tablas abiertas",
      "pt": "Apache Iceberg v3: por que tabelas abertas importam"
    },
    "summary": {
      "en": "Snowflake announced Apache Iceberg v3 support in March 2026. Beyond a product update, the announcement raises questions about interoperability, metadata and data ownership.",
      "es": "Snowflake anunció soporte para Apache Iceberg v3 en marzo de 2026. La noticia plantea preguntas sobre interoperabilidad, metadatos y propiedad de los datos.",
      "pt": "A Snowflake anunciou suporte ao Apache Iceberg v3 em março de 2026. A novidade levanta questões sobre interoperabilidade, metadados e propriedade de dados."
    },
    "sections": {
      "en": [
        [
          "What happened",
          "On March 4, 2026, Snowflake announced support for Apache Iceberg v3. Its announcement highlights row lineage and semi-structured data; the official release notes described v3 support as a public preview on that date. Architecture teams should confirm feature availability in their own accounts before planning production use."
        ],
        [
          "Why architects should care",
          "Open table formats can reduce the coupling between storage and individual processing engines. But architecture still has to define who owns catalogs, how access policies work across engines, how schemas evolve and how changes are audited."
        ],
        [
          "My architecture takeaway",
          "Before choosing an open lakehouse pattern, document the data ownership model, catalog responsibilities, change-data-capture requirements and a cross-engine test plan. Interoperability is a design property to verify, not just a format to enable."
        ]
      ],
      "es": [
        [
          "¿Qué ocurrió?",
          "El 4 de marzo de 2026, Snowflake anunció soporte para Apache Iceberg v3. El anuncio destaca el linaje por fila y los datos semiestructurados, mientras que las notas de versión oficiales lo describían como vista previa pública en esa fecha. Es importante confirmar la disponibilidad antes de usarlo en producción."
        ],
        [
          "Implicación arquitectónica",
          "Los formatos abiertos pueden desacoplar almacenamiento y procesamiento. Aun así, debemos definir propietarios del catálogo, controles de acceso entre motores, evolución de esquemas y auditoría de cambios."
        ],
        [
          "Mi conclusión",
          "Antes de elegir un lakehouse abierto, documentaría la propiedad de los datos, la responsabilidad del catálogo, las necesidades de CDC y un plan de pruebas entre motores."
        ]
      ],
      "pt": [
        [
          "O que aconteceu?",
          "Em 4 de março de 2026, a Snowflake anunciou suporte ao Apache Iceberg v3. O anúncio destaca linhagem por linha e dados semiestruturados, enquanto as notas oficiais classificavam o recurso como prévia pública naquela data. É importante confirmar a disponibilidade antes de usá-lo em produção."
        ],
        [
          "Por que importa?",
          "Formatos abertos podem desacoplar armazenamento e processamento. Mas a arquitetura ainda precisa definir catálogo, políticas entre mecanismos, evolução de esquema e auditoria."
        ],
        [
          "Minha conclusão",
          "Antes de adotar um lakehouse aberto, documentaria propriedade dos dados, responsabilidades de catálogo, requisitos de CDC e testes entre mecanismos."
        ]
      ]
    },
    "slug": "iceberg-v3-2026"
  },
  "fabric": {
    "date": "2026-09",
    "source": "https://learn.microsoft.com/en-us/fabric/fundamentals/whats-new",
    "title": {
      "en": "OneLake governance in 2026: from access to architecture",
      "es": "Gobierno de OneLake en 2026: del acceso a la arquitectura",
      "pt": "Governança do OneLake em 2026: do acesso à arquitetura"
    },
    "summary": {
      "en": "In September 2026, Microsoft listed the OneLake catalog Govern experience as generally available. A useful signal: data platform architecture is as much about policy and accountability as pipelines.",
      "es": "En septiembre de 2026, Microsoft incluyó la experiencia Govern del catálogo OneLake entre las funcionalidades generalmente disponibles. La arquitectura no es solo pipelines: también políticas y responsabilidad.",
      "pt": "Em setembro de 2026, a Microsoft listou a experiência Govern do catálogo OneLake como geralmente disponível. Arquitetura de dados também significa políticas e responsabilidade."
    },
    "sections": {
      "en": [
        [
          "What happened",
          "Microsoft’s Fabric release notes list the OneLake catalog Govern experience as generally available in September 2026, providing centralized governance experiences for data estates. The release also included other features supporting data platform administration and integration."
        ],
        [
          "The architecture question",
          "Centralized governance interfaces help, but they do not replace explicit data-domain ownership, classification standards, least-privilege policies, lineage or operating processes. An architect must decide how the policy model fits business accountability."
        ],
        [
          "My architecture takeaway",
          "I would start with a data product inventory, identify owners and consumers, map sensitive-data boundaries and define controls that can be tested. Then I would measure whether the catalog actually improves discoverability and access governance."
        ]
      ],
      "es": [
        [
          "¿Qué ocurrió?",
          "Las notas oficiales de Microsoft Fabric registran la disponibilidad general de la experiencia Govern del catálogo OneLake en septiembre de 2026, con funciones centralizadas de gobierno del entorno de datos."
        ],
        [
          "La pregunta arquitectónica",
          "Una interfaz de gobierno centralizada ayuda, pero no reemplaza responsables de dominios, clasificación, mínimos privilegios, linaje ni procesos operativos."
        ],
        [
          "Mi conclusión",
          "Comenzaría con un inventario de productos de datos, sus responsables y consumidores, controles de acceso y métricas sobre descubrimiento y gobierno."
        ]
      ],
      "pt": [
        [
          "O que aconteceu?",
          "As notas oficiais do Microsoft Fabric registram a disponibilidade geral da experiência Govern do catálogo OneLake em setembro de 2026, com recursos centralizados de governança."
        ],
        [
          "A questão arquitetural",
          "Uma interface centralizada ajuda, mas não substitui proprietários de domínios, classificação, menor privilégio, linhagem e processos operacionais."
        ],
        [
          "Minha conclusão",
          "Começaria pelo inventário de produtos de dados, responsáveis, consumidores, controles de acesso e métricas de descoberta e governança."
        ]
      ]
    },
    "slug": "onelake-governance-2026"
  }
};
