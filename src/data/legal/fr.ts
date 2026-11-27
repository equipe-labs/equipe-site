import type { LegalCopy } from '../legal';

const fr: LegalCopy = {
  ui: {
    updated: 'Dernière mise à jour : {date}',
    toc: 'Sur cette page',
    prevails: 'Cette page existe aussi dans d’autres langues. Si une traduction diffère de la version anglaise, c’est la version anglaise qui s’applique.',
    notAdvice: 'Nous avons rédigé ce texte avec des mots simples pour qu’il soit facile à lire. Il décrit le fonctionnement d’equipe ; ce n’est pas un conseil juridique pour votre propre entreprise ou votre propre produit.',
    privacy: 'Confidentialité',
    terms: 'Conditions',
    appPolicy: 'Confidentialité de l’app mobile',
  },
  privacy: {
    title: 'Politique de confidentialité — equipe',
    desc: 'Ce qu’equipe collecte, pourquoi, qui le traite, comment les comptes connectés comme Google et les fonctions d’IA traitent les données, combien de temps nous les conservons et les choix dont vous disposez.',
    h1: 'Politique de confidentialité',
    summaryTitle: 'En bref',
    summary: [
      'Nous collectons ce dont nous avons besoin pour faire fonctionner votre équipe et vos produits, et rien pour le vendre. Nous ne vendons pas de données personnelles.',
      'Nous n’utilisons ni votre espace de travail, ni les données de vos produits, ni les données de vos comptes connectés pour entraîner des modèles d’IA.',
      'Les comptes que vous connectez, comme Google, ne servent qu’aux fonctions que vous activez. Vous pouvez les déconnecter à tout moment.',
      'Fonctions d’IA dans votre produit : equipe ne conserve ni ce que tapent les visiteurs ni ce que répond l’IA, seulement des volumes et des coûts.',
      'Vous pouvez nous demander d’exporter ou de supprimer vos données à tout moment : [support@equipe.im](mailto:support@equipe.im).',
    ],
    sections: [
      { id: 'who', h: 'Qui nous sommes et ce que couvre cette politique', body: [
        'equipe vous donne une équipe d’agents IA qui construisent, exploitent et améliorent votre produit. Le service est exploité par **Umbriles Inc.** (« nous »). Cette politique couvre le site equipe.im, le service equipe sur app.equipe.im, le service d’IA sur ai.equipe.im et l’hébergement des produits que votre équipe construit. L’app mobile equipe a sa propre politique courte sur [equipe.im/app/privacy](/app/privacy/).',
      ] },
      { id: 'collect', h: 'Ce que nous collectons', body: [
        { ul: [
          '**Données de compte.** Votre adresse e-mail et, si vous vous connectez avec Google ou Apple, votre nom, votre e-mail et l’identifiant de compte que ces services nous transmettent. Si vous utilisez une clé d’accès (passkey), nous ne conservons que sa clé publique ; votre empreinte digitale ou votre visage ne quittent jamais votre appareil.',
          '**Votre espace de travail.** Ce que vous et votre équipe créez dans equipe : les messages avec votre équipe, les demandes, les tâches, les plans, les fichiers que vous importez, le code et le contenu de vos produits, et les réglages.',
          '**Secrets.** Les mots de passe et clés que vous saisissez pour vos produits sont conservés chiffrés dans le coffre à secrets de votre équipe et ne sont pas réaffichés dans les conversations.',
          '**Comptes connectés.** Si vous connectez un compte comme Google, Meta ou GitHub, nous conservons un jeton d’accès chiffré et le nom du compte, ainsi que ce qui est nécessaire pour l’utiliser pour vous. Voir « Comptes connectés » ci-dessous.',
          '**Paiements.** Les paiements sont gérés par Stripe. Nous ne voyons ni ne conservons les numéros de carte complets. Nous conservons les registres de facturation : ce qui a été acheté, quand et pour quel montant.',
          '**Données d’usage et données techniques.** Les événements de connexion, l’adresse IP et les informations sur le navigateur pour la sécurité et la prévention des abus, les journaux d’erreurs, et le temps d’IA et de calcul qu’utilise votre équipe, pour les limites et la facturation.',
          '**Messages que vous nous envoyez.** Ce que vous envoyez quand vous écrivez au support.',
          '**Site web.** equipe.im compte les visites avec PostHog sans cookies et sans créer de profils personnels, et note comment un visiteur nous a trouvés (par exemple le site référent ou la campagne).',
        ] },
      ] },
      { id: 'use', h: 'Comment nous les utilisons', body: [
        { ul: [
          'Pour fournir le service : faire fonctionner votre équipe, construire et héberger vos produits, et vous afficher votre espace de travail.',
          'Pour le sécuriser : vérifier que c’est bien vous, prévenir les abus et la fraude, et enquêter sur les problèmes.',
          'Pour mesurer l’utilisation à des fins de limites et de facturation, et pour améliorer equipe.',
          'Pour vous contacter au sujet de votre compte, de la sécurité, de la facturation et des changements importants. Des e-mails marketing uniquement avec votre consentement ; vous pouvez vous désabonner à tout moment.',
        ] },
        'Nous ne vendons pas vos données personnelles, et nous n’utilisons ni votre espace de travail, ni les données de vos produits, ni les données des comptes connectés pour entraîner des modèles d’IA.',
        'Lorsque le RGPD (GDPR) ou des lois similaires s’appliquent, nous nous fondons sur : notre contrat avec vous (pour fournir le service), nos intérêts légitimes (sécurité, prévention des abus, amélioration d’equipe), votre consentement (par exemple pour les e-mails marketing, ou pour les cookies publicitaires si nous en utilisons un jour) et nos obligations légales (par exemple la conservation des registres de facturation).',
      ] },
      { id: 'ai', h: 'Comment l’IA traite votre travail', body: [
        'Votre équipe travaille en envoyant le contenu dont elle a besoin à des modèles d’IA exploités par des fournisseurs d’IA auxquels nous faisons appel pour votre compte (comme Anthropic, OpenAI et Google). Ils le traitent pour produire des réponses selon leurs conditions d’API professionnelles, qui n’utilisent pas ce contenu pour entraîner leurs modèles. equipe choisit le modèle pour chaque étape.',
        'Les agents ne décident jamais des approbations à votre place : tout ce qui publie, envoie, dépense de l’argent ou supprime des données attend votre approbation explicite.',
      ] },
      { id: 'connections', h: 'Comptes connectés (Connexions)', body: [
        'Sur la page Connexions, vous pouvez connecter des comptes externes pour que votre équipe configure des choses pour votre produit sans que vous ayez à copier des codes ou des identifiants. Connecter un compte est toujours votre choix, fait dans l’écran de consentement du fournisseur lui-même. Ce que nous faisons avec chacun :',
        { ul: [
          '**Google.** Avec votre consentement, nous demandons votre adresse e-mail et l’accès à Google Site Verification, Search Console et Google Analytics ; à Tag Manager uniquement si vous l’ajoutez ; et à Google Ads uniquement si vous connectez la publicité. Nous utilisons cet accès uniquement pour faire ce que vous avez demandé pour votre produit : vérifier votre site, l’ajouter à Search Console et soumettre son sitemap, créer une propriété Google Analytics et placer son identifiant dans votre produit, créer et publier un conteneur Tag Manager, et créer une balise de conversion pour Google Ads, puis vous montrer l’état et les résultats dans equipe.',
          '**Meta, TikTok, LinkedIn, X, Mailchimp, Bing et GitHub.** Utilisés uniquement pour ce que vous activez : créer un pixel ou une balise pour votre produit, lire les résultats publicitaires pour vos rapports, publier un post ou une newsletter que vous avez approuvés, vérifier votre site, ou synchroniser le code de votre produit avec un dépôt privé de votre compte GitHub.',
          '**Les dépenses et les publications vous attendent.** Les publicités, les posts, les newsletters et tout ce qui coûte de l’argent n’ont lieu qu’après votre approbation.',
          '**Conservés en sécurité.** Les jetons d’accès sont chiffrés, liés à votre équipe et au fournisseur, et conservés uniquement tant que la connexion existe. Quand vous déconnectez un compte, nous supprimons notre copie ; pour Google, nous demandons aussi à Google de révoquer l’accès. Vous pouvez également retirer l’accès d’equipe dans les paramètres de votre compte Google à tout moment.',
        ] },
        '**Données utilisateur Google.** L’utilisation et le transfert par equipe des informations reçues des API Google respectent la [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy) (règles relatives aux données utilisateur des services d’API Google), y compris les exigences de Limited Use (utilisation limitée). Nous utilisons les données utilisateur Google uniquement pour fournir et améliorer les fonctions que vous voyez dans equipe ; nous ne les vendons pas, ne les utilisons pas pour la publicité ni pour entraîner des modèles d’IA ; et les personnes chez equipe ne les lisent pas, sauf si vous nous le demandez, si c’est nécessaire pour la sécurité ou une enquête sur un abus, ou si la loi l’exige. Lorsque votre équipe a besoin de ces informations pour faire un travail que vous avez demandé, elles peuvent être traitées par les fournisseurs d’IA cités plus haut, uniquement pour produire ce travail.',
      ] },
      { id: 'product-ai', h: 'Fonctions d’IA dans votre produit', body: [
        'Votre équipe peut ajouter des fonctions d’IA au produit qu’elle construit pour vous, comme un chatbot d’assistance, des réponses FAQ, la traduction ou des résumés d’avis. Lorsqu’elles sont activées :',
        { ul: [
          'Ce qu’un visiteur tape est envoyé à un fournisseur d’IA pour produire la réponse.',
          'equipe ne conserve ni ce que tapent les visiteurs ni ce que répond l’IA. Nous ne conservons que des volumes, des tokens et des coûts par produit, par jour et par fonction, pour la facturation et votre tableau d’utilisation.',
          'Pour appliquer des limites par visiteur, nous conservons des identifiants d’utilisateur et d’IP hachés (illisibles) pendant deux jours au maximum.',
          'La clé de chaque produit reste sur son serveur, et les appels depuis un navigateur sont refusés.',
        ] },
        'Vis-à-vis de vos visiteurs, vous êtes responsable de votre produit. La politique de confidentialité qu’equipe rédige pour votre produit reçoit une section sur l’IA, en 8 langues, dès que l’IA est activée.',
      ] },
      { id: 'products', h: 'Les produits que vous construisez', body: [
        'Pour les personnes qui utilisent les produits que construit votre équipe (vos visiteurs et clients), c’est vous qui décidez de ce que le produit collecte, et nous traitons ces données pour votre compte afin de l’héberger et de le faire fonctionner : sa base de données, la connexion, les e-mails, les fichiers et les statistiques intégrées, qui n’utilisent pas de cookies. Nous n’utilisons pas les données de votre produit à nos propres fins. Votre produit reçoit sa propre politique de confidentialité et ses propres conditions, rédigées à partir de ce qu’il fait réellement ; vous en êtes responsable, ainsi que de la réponse aux demandes de vos utilisateurs.',
      ] },
      { id: 'sharing', h: 'Qui traite vos données', body: [
        'Nous faisons appel à des prestataires pour faire fonctionner equipe. Ils traitent les données uniquement pour nous fournir leurs services :',
        { ul: [
          '**Cloudflare :** hébergement, bases de données, stockage de fichiers, envoi d’e-mails et enregistrement de domaines.',
          '**Luxor Agent Cloud (anciennement Tenki) :** les machines cloud sur lesquelles travaille votre équipe.',
          '**Fournisseurs d’IA** comme Anthropic, OpenAI et Google : modèles d’IA.',
          '**Stripe :** paiements pour equipe, et paiements dans votre produit si vous les mettez en place.',
          '**Google et Apple :** connexion, si vous les utilisez.',
          '**PostHog :** comptage des visites sans cookies sur equipe.im.',
          '**Les comptes que vous connectez,** comme décrit ci-dessus.',
        ] },
        'Nous pouvons divulguer des données si la loi l’exige, ou pour protéger les droits et la sécurité de nos utilisateurs et du public. Si equipe était un jour vendu ou fusionné, cette politique continuerait de s’appliquer à vos données, et nous vous en informerions.',
      ] },
      { id: 'transfers', h: 'Où vos données sont stockées', body: [
        'Nos prestataires peuvent stocker des données hors de votre pays, y compris aux États-Unis. Lorsque la loi l’exige, nous nous appuyons sur les garanties de transfert proposées par nos prestataires, comme les clauses contractuelles types de la Commission européenne.',
      ] },
      { id: 'retention', h: 'Combien de temps nous les conservons', body: [
        { ul: [
          'Votre espace de travail et vos produits : tant que votre compte et votre équipe existent.',
          'Lorsque vous supprimez une équipe ou votre compte, nous supprimons les données correspondantes sous 30 jours. Les sauvegardes expirent d’elles-mêmes en 30 jours environ.',
          'Une équipe gratuite que personne n’a ouverte depuis 14 jours peut être supprimée 7 jours après l’envoi d’un avis par e-mail, sauf si elle est ouverte avant.',
          'Jetons des comptes connectés : jusqu’à ce que vous déconnectiez le compte ou que l’équipe soit supprimée.',
          'Registres de facturation : aussi longtemps que l’exigent les lois fiscales et comptables.',
          'Identifiants de visiteurs hachés pour les limites d’IA : deux jours au maximum.',
        ] },
        'Vous pouvez télécharger votre projet (code, fichiers et historique) à tout moment depuis la page Projet.',
      ] },
      { id: 'rights', h: 'Vos choix et vos droits', body: [
        'Vous pouvez accéder à vos données, les exporter, les corriger ou les supprimer, et fermer votre compte, en écrivant à [support@equipe.im](mailto:support@equipe.im). Selon l’endroit où vous vivez (par exemple au titre du RGPD en Europe, du RGPD britannique (UK GDPR) ou du CCPA en Californie), vous pouvez aussi avoir le droit de vous opposer au traitement ou de le limiter, le droit à la portabilité des données, le droit de retirer votre consentement et le droit d’introduire une réclamation auprès d’une autorité de protection des données. Nous ne vendons ni ne partageons de données personnelles pour de la publicité comportementale intercontextuelle.',
      ] },
      { id: 'security', h: 'Sécurité', body: [
        'Nous utilisons le chiffrement en transit, des secrets et jetons d’accès chiffrés, des codes de connexion et identifiants de session hachés, une machine isolée pour chaque équipe et un accès selon le principe du moindre privilège. Aucun système n’est parfaitement sûr ; si une violation de données vous concerne, nous vous en informerons comme la loi l’exige. Plus de détails sur notre [page sécurité](/security/).',
      ] },
      { id: 'cookies', h: 'Cookies et stockage local', body: [
        { ul: [
          'app.equipe.im utilise un cookie de session de connexion pour que vous restiez connecté.',
          'equipe.im mémorise votre thème et votre langue dans votre navigateur.',
          'Le comptage des visites sur equipe.im se fait sans cookies.',
          'Nous n’utilisons aujourd’hui aucun cookie publicitaire ni de suivi intersites. Si nous ajoutons un jour des balises publicitaires, elles ne se chargeront qu’après votre accord dans un bandeau cookies, et vous pourrez modifier votre choix à tout moment.',
        ] },
      ] },
      { id: 'children', h: 'Enfants', body: ['equipe n’est pas destiné aux enfants de moins de 16 ans, et nous ne collectons pas sciemment leurs données.'] },
      { id: 'changes', h: 'Modifications', body: ['Lorsque cette politique change, nous mettons à jour cette page et la date ci-dessus, et nous vous informons directement des changements importants.'] },
      { id: 'contact', h: 'Contact', body: ['Umbriles Inc. · [support@equipe.im](mailto:support@equipe.im)'] },
    ],
  },
  terms: {
    title: 'Conditions d’utilisation — equipe',
    desc: 'Les conditions d’utilisation d’equipe : votre compte, les crédits et les offres, les renouvellements et remboursements, les domaines à votre nom, les fonctions d’IA, les comptes connectés, les paiements et l’usage acceptable.',
    h1: 'Conditions d’utilisation',
    summaryTitle: 'En bref',
    summary: [
      'Ce que vous apportez et ce que votre équipe construit pour vous vous appartient. Vous décidez de ce qui passe en ligne, de ce qui est envoyé et de ce qui coûte de l’argent.',
      'Le travail de votre équipe est payé en crédits (100 crédits = $1). Les crédits achetés non utilisés sont remboursables dans les 14 jours suivant l’achat.',
      'Les offres se renouvellent jusqu’à ce que vous les résiliiez. La résiliation prend effet à la fin de la période que vous avez payée.',
      'Les domaines achetés via equipe sont enregistrés à votre nom.',
      'L’IA peut se tromper. Vérifiez ce qui compte avant que ce soit rendu public.',
    ],
    sections: [
      { id: 'agreement', h: 'Accord', body: [
        'Les présentes conditions régissent votre utilisation d’equipe, un service exploité par **Umbriles Inc.** (« nous »), y compris equipe.im, app.equipe.im, ai.equipe.im et les produits que nous hébergeons pour vous. En créant un compte ou en utilisant equipe, vous acceptez ces conditions et notre [Politique de confidentialité](/privacy/).',
      ] },
      { id: 'service', h: 'Le service', body: [
        'equipe fournit une équipe d’agents IA (comme un PM, des ingénieurs, un designer, une QA et un analyste de données) qui planifient, construisent, lancent, hébergent et améliorent des logiciels et des travaux connexes pour vous, avec les outils et l’infrastructure qu’ils utilisent : hébergement, bases de données, domaines, e-mail, fonctions d’IA et connexions à d’autres services. Les fonctions peuvent évoluer à mesure que nous améliorons le service, et les fonctions que nous présentons comme précoces ou à venir peuvent être limitées ou modifiées.',
      ] },
      { id: 'account', h: 'Votre compte et votre équipe', body: [
        'Vous devez avoir au moins 16 ans et être en mesure de conclure un contrat contraignant. Protégez vos moyens de connexion ; vous êtes responsable de l’activité réalisée avec votre compte et au sein de votre équipe. Signalez-nous rapidement toute utilisation non autorisée.',
        'Une équipe peut compter des propriétaires, des administrateurs, des membres et des lecteurs. Les propriétaires et administrateurs gèrent les personnes, la facturation et les limites. L’offre Équipe comprend 5 personnes ; les éditeurs supplémentaires sont facturés en plus, comme indiqué sur la [page des tarifs](/pricing/), et les invitations en lecture seule sont gratuites.',
      ] },
      { id: 'in-charge', h: 'C’est vous qui décidez', body: [
        'Les agents agissent selon vos instructions et vos approbations. Vous décidez de ce qui est construit, publié, envoyé, acheté ou supprimé. Les résultats de l’IA peuvent être erronés, incomplets ou non sécurisés : vérifiez ce qui compte pour vous, en particulier tout ce qui est public, financier, juridique, médical ou lié à la sécurité. Vous êtes responsable de vos produits, de leur contenu et de leur conformité aux lois qui s’y appliquent, comme le droit de la consommation, de la protection des données et de la publicité.',
      ] },
      { id: 'content', h: 'Votre contenu', body: [
        'Vous conservez tous les droits sur le contenu, les données et le code que vous fournissez et qu’equipe produit pour vous (« votre contenu »). Vous pouvez télécharger votre projet à tout moment. Vous nous accordez une licence limitée pour héberger, traiter, copier et transmettre votre contenu, uniquement dans la mesure nécessaire pour fournir et sécuriser le service. Vous confirmez détenir les droits sur le contenu que vous apportez.',
      ] },
      { id: 'credits', h: 'Crédits', body: [
        { ul: [
          '**100 crédits = $1.** Le travail de votre équipe est payé en crédits : le travail d’IA au prix catalogue du modèle plus notre marge, et l’ordinateur cloud qu’utilise votre équipe pendant qu’elle travaille. Chaque tâche indique ce qu’elle a utilisé, et les demandes affichent d’abord une estimation.',
          '**Les packs de crédits** sont des achats ponctuels, valables 12 mois à compter de l’achat.',
          '**Les crédits d’offre** inclus dans une offre Équipe mensuelle sont reportés pendant 2 mois ; les crédits mensuels d’une offre annuelle sont reportés pendant 3 mois. Les crédits arrivés à expiration sont retirés.',
          '**Les crédits gratuits et bonus** (par exemple le crédit de bienvenue ou les bonus promotionnels) n’ont aucune valeur monétaire, ne peuvent être ni remboursés ni transférés, et expirent avec les crédits qu’ils accompagnaient ou comme indiqué dans Facturation.',
          '**Quand les crédits sont épuisés,** votre équipe s’arrête et reprend dès que des crédits sont ajoutés. Vous pouvez fixer un plafond mensuel, et la recharge automatique est désactivée sauf si vous l’activez.',
        ] },
      ] },
      { id: 'plans', h: 'Offres, renouvellements et résiliation', body: [
        { ul: [
          '**Les offres mensuelles** se renouvellent chaque mois jusqu’à ce que vous les résiliiez.',
          '**Les offres annuelles** couvrent les frais de base de l’offre pendant un an et se renouvellent pour une année supplémentaire au prix annuel affiché dans Facturation, sauf si vous résiliez avant la date de renouvellement. Nous vous prévenons avant le renouvellement d’une offre annuelle. Les prix promotionnels de première année ne s’appliquent qu’à la première année.',
          '**Résiliez à tout moment** dans Facturation. La résiliation prend effet à la fin de la période que vous avez payée ; votre équipe et vos produits continuent de fonctionner jusque-là.',
          '**Retard de paiement.** Si le paiement d’une offre a 7 jours de retard, le travail de votre équipe est mis en pause ; votre produit en ligne reste accessible pendant que nous réglons la situation avec vous.',
          '**Les changements de prix** sont annoncés à l’avance et s’appliquent à partir de votre prochain renouvellement.',
        ] },
      ] },
      { id: 'refunds', h: 'Remboursements', body: [
        'Les crédits non utilisés d’un pack de crédits sont remboursables dans les 14 jours suivant l’achat : écrivez à [support@equipe.im](mailto:support@equipe.im). Les crédits bonus reçus avec un pack remboursé sont retirés dans la même proportion. Pour le reste, les frais et crédits déjà payés ne sont pas remboursés, sauf si la loi l’exige ou si nous l’indiquons. Si une tâche s’est mal passée, vous pouvez demander à récupérer ses crédits sur la page Facturation.',
      ] },
      { id: 'domains', h: 'Domaines', body: [
        { ul: [
          'Un domaine n’est acheté qu’après que vous avez approuvé son prix, qui indique le prix de la première année et celui du renouvellement.',
          '**Les domaines achetés ou transférés via equipe sont enregistrés à votre nom** (ou à celui de votre entreprise), avec vous comme propriétaire légal et la confidentialité WHOIS activée. Les règles du registre et du bureau d’enregistrement s’appliquent.',
          'Les domaines ne se renouvellent pas automatiquement ; le renouvellement nécessite votre approbation et votre paiement. Un domaine non renouvelé peut expirer et être perdu selon les règles du registre.',
          'Vous pouvez transférer un domaine acheté via equipe vers un autre bureau d’enregistrement ; écrivez-nous et nous vous aiderons à le faire.',
          'Un domaine que vous possédez déjà reste chez votre bureau d’enregistrement, sauf si vous choisissez de le transférer vers equipe. Vous restez responsable de son renouvellement là-bas.',
        ] },
      ] },
      { id: 'ai-features', h: 'Fonctions d’IA dans votre produit', body: [
        { ul: [
          'Les fonctions d’IA que votre équipe ajoute à votre produit (comme un chatbot, des résumés ou des images) sont payées avec vos crédits au prix catalogue du fournisseur d’IA plus 10 %, au fur et à mesure que vos visiteurs les utilisent.',
          'Chaque produit a une limite mensuelle d’IA, de 1 000 crédits sauf si un propriétaire ou un administrateur la modifie. À la limite, les fonctions d’IA se mettent en pause jusqu’au mois suivant ou jusqu’à ce que la limite soit relevée. Il existe aussi des limites par visiteur.',
          'Vous êtes responsable de la manière dont les fonctions d’IA sont utilisées dans votre produit, d’informer vos utilisateurs que les réponses sont rédigées par une IA, et de faire vérifier les résultats de l’IA par une personne avant qu’ils servent à des décisions qui affectent significativement quelqu’un.',
          'Nous pouvons mettre en pause les fonctions d’IA d’un produit qui fait l’objet d’abus ou qui enfreint les présentes conditions.',
        ] },
      ] },
      { id: 'connections', h: 'Comptes connectés', body: [
        'Lorsque vous connectez un compte externe (par exemple Google, Meta ou GitHub), vous autorisez votre équipe à l’utiliser en votre nom pour les fonctions que vous activez. Les publicités, les posts et tout ce qui coûte de l’argent n’ont lieu qu’après votre approbation. Les conditions de l’autre service s’appliquent également, et vous pouvez déconnecter le compte à tout moment sur la page Connexions.',
      ] },
      { id: 'payments', h: 'Paiements dans votre produit', body: [
        'Votre équipe peut ajouter un moyen d’encaisser des paiements au produit qu’elle construit pour vous, soit via un compte Stripe qu’equipe ouvre pour votre entreprise (Stripe Connect, « paiements via equipe »), soit via votre propre compte Stripe.',
        { ul: [
          '**Vous êtes le vendeur.** Vous êtes le marchand et le vendeur officiel (merchant of record) de tout ce qui est vendu via votre produit. equipe n’est partie ni à vos ventes ni à aucun contrat entre vous et vos clients.',
          '**Vous êtes responsable de ce que vous vendez :** vos produits et services, prix, reçus, taxes, remboursements, rétrofacturations et litiges, service client, et le respect des lois applicables à vos ventes.',
          '**Les conditions de Stripe s’appliquent.** Les paiements via equipe sont traités par Stripe selon le [Stripe Connected Account Agreement](https://stripe.com/legal/connect-account), qui inclut le [Stripe Services Agreement](https://stripe.com/legal/ssa) ; vous l’acceptez lorsque vous mettez en place les paiements, et c’est Stripe (et non equipe) qui vérifie votre identité et effectue les versements sur votre compte bancaire.',
          '**Les frais d’equipe.** Pour les paiements via equipe, equipe prélève des frais de plateforme de 1 % sur chaque paiement réussi, en plus des frais propres à Stripe. Ils ne sont pas restitués si vous remboursez ensuite le paiement ou perdez un litige. Lorsque vous utilisez votre propre compte Stripe, equipe ne prélève aucuns frais. Nous affichons ces frais avant que vous mettiez en place les paiements et vous prévenons à l’avance avant de les modifier.',
          '**Mise en pause.** Nous pouvons mettre en pause les paiements via equipe, ou vos versements lorsque Stripe nous le demande, si nous soupçonnons raisonnablement une fraude, une violation des présentes conditions ou de celles de Stripe, ou si Stripe ou la loi l’exige.',
        ] },
      ] },
      { id: 'acceptable-use', h: 'Usage acceptable', body: [
        'N’utilisez pas equipe, ni les produits et fonctions d’IA qu’il construit, pour : enfreindre la loi ; porter atteinte aux droits d’autrui ; créer ou diffuser des logiciels malveillants ou du phishing ; envoyer du spam ; usurper l’identité de personnes ou d’organisations pour tromper ; attaquer, aspirer (scraping) ou surcharger des systèmes auxquels vous n’êtes pas autorisé à accéder ; contourner la sécurité, les limites ou la facturation ; harceler des personnes ou leur nuire ; ou générer du contenu sexualisant des mineurs. Nous pouvons refuser de telles demandes et suspendre les travaux, produits ou comptes qui enfreignent ces règles.',
      ] },
      { id: 'free', h: 'Équipes gratuites', body: [
        'Une équipe gratuite que personne n’a ouverte depuis 14 jours peut être supprimée 7 jours après l’envoi d’un avis par e-mail, sauf si elle est ouverte avant. Vous pouvez télécharger votre projet avant cela.',
      ] },
      { id: 'third-party', h: 'Services tiers', body: [
        'equipe fonctionne avec des services que nous ou vous connectons, comme des fournisseurs d’IA, l’hébergement, des bureaux d’enregistrement de domaines, les paiements et les statistiques. Leurs conditions s’appliquent également, et nous ne sommes pas responsables des services que nous ne contrôlons pas.',
      ] },
      { id: 'availability', h: 'Disponibilité et garanties', body: [
        'Nous nous efforçons de garder equipe disponible et vos données en sécurité, mais le service est fourni « en l’état » et « selon disponibilité ». Dans la mesure permise par la loi, nous excluons les garanties implicites, notamment de qualité marchande, d’adéquation à un usage particulier et d’absence de contrefaçon.',
      ] },
      { id: 'liability', h: 'Limitation de responsabilité', body: [
        'Dans la mesure permise par la loi, nous ne sommes pas responsables des dommages indirects, accessoires, spéciaux, consécutifs ou punitifs, ni des pertes de bénéfices, de revenus ou de données. Notre responsabilité totale pour toute réclamation est limitée au montant que vous nous avez payé au cours des 12 mois précédant la réclamation, ou à USD 100 si vous n’avez rien payé. Rien dans les présentes conditions ne limite les droits auxquels vous ne pouvez pas renoncer en vertu des lois sur la protection des consommateurs.',
      ] },
      { id: 'ending', h: 'Fin de l’utilisation', body: [
        'Vous pouvez cesser d’utiliser equipe et supprimer votre compte à tout moment. Nous pouvons suspendre votre accès ou y mettre fin si vous enfreignez les présentes conditions ou si la loi l’exige, avec un préavis lorsque c’est raisonnable. Après la fin de votre compte, vous pouvez exporter votre contenu pendant 30 jours, sauf si la loi l’empêche.',
      ] },
      { id: 'changes', h: 'Modifications', body: [
        'Nous pouvons mettre à jour ces conditions. Nous publierons la nouvelle version ici avec une nouvelle date et vous informerons à l’avance des changements importants. Si vous continuez à utiliser equipe après leur entrée en vigueur, vous les acceptez.',
      ] },
      { id: 'contact', h: 'Contact', body: ['Umbriles Inc. · [support@equipe.im](mailto:support@equipe.im)'] },
    ],
  },
};

export default fr;
