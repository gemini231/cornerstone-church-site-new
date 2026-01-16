import { motion } from 'motion/react';
import { Building2, CreditCard, Copy, CheckCircle2 } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function GivingDetails() {
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);

  const accounts = [
    {
      name: 'CHRIST THE CORNERSTONE TABERNACLE',
      accountNumber: '1391676177',
      bank: 'ACCESS BANK PLC',
      color: '#F5B301',
    },
    {
      name: 'CCT WELFARE ACCOUNT NEHEMIAH FUND',
      accountNumber: '1026638077',
      bank: 'UNITED BANK FOR AFRICA',
      color: '#6EC1E4',
    },
  ];

  const copyToClipboard = (accountNumber: string, accountName: string) => {
    navigator.clipboard.writeText(accountNumber);
    setCopiedAccount(accountName);
    setTimeout(() => setCopiedAccount(null), 2000);
  };

  return (
    <section id="giving-details" className="py-24 bg-gradient-to-b from-[#0E1E3A] to-[#1E2A38]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#F5B301] font-['Inter'] uppercase tracking-wider" style={{ fontWeight: 600 }}>
            Give Cheerfully
          </span>
          <h2
            className="text-[#FAF9F6] font-['Playfair_Display'] mt-3 mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, lineHeight: 1.2 }}
          >
            Bank Account Details
          </h2>
          <div className="h-1 w-20 bg-[#F5B301] mx-auto mb-4"></div>
          <p className="text-[#BFD7EA] font-['Inter'] max-w-2xl mx-auto" style={{ fontSize: '1.125rem' }}>
            Support God's work through direct bank transfer to our Nigerian account numbers
          </p>
        </motion.div>

        {/* Account Cards */}
        <div className="space-y-8">
          {accounts.map((account, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden border-2 hover:border-[#F5B301] transition-all duration-300 bg-[#FAF9F6]">
                <div 
                  className="h-2"
                  style={{ backgroundColor: account.color }}
                ></div>
                
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div 
                      className="p-4 rounded-xl flex-shrink-0"
                      style={{ backgroundColor: `${account.color}20` }}
                    >
                      <Building2 className="w-8 h-8" style={{ color: account.color }} />
                    </div>
                    
                    <div className="flex-grow">
                      <h3 
                        className="text-[#0E1E3A] font-['Playfair_Display'] mb-1"
                        style={{ fontSize: '1.5rem', fontWeight: 600 }}
                      >
                        {account.name}
                      </h3>
                      <p className="text-[#2E2E2E] font-['Inter'] text-sm">
                        Nigerian Bank Account
                      </p>
                    </div>
                  </div>

                  {/* Account Details Table */}
                  <div className="bg-gradient-to-br from-[#0E1E3A] to-[#1E2A38] rounded-xl p-6 mb-4">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center pb-4 border-b border-[#FAF9F6]/20">
                        <span className="text-[#BFD7EA] font-['Inter']" style={{ fontWeight: 600 }}>
                          Account Name
                        </span>
                        <span className="text-[#FAF9F6] font-['Inter'] text-right">
                          {account.name}
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center pb-4 border-b border-[#FAF9F6]/20">
                        <span className="text-[#BFD7EA] font-['Inter']" style={{ fontWeight: 600 }}>
                          Account Number
                        </span>
                        <div className="flex items-center gap-3">
                          <span 
                            className="text-[#F5B301] font-['Inter'] tracking-wider"
                            style={{ fontSize: '1.25rem', fontWeight: 700 }}
                          >
                            {account.accountNumber}
                          </span>
                          <button
                            onClick={() => copyToClipboard(account.accountNumber, account.name)}
                            className="p-2 hover:bg-[#FAF9F6]/10 rounded-lg transition-colors"
                            aria-label="Copy account number"
                          >
                            {copiedAccount === account.name ? (
                              <CheckCircle2 className="w-5 h-5 text-[#9DB8A0]" />
                            ) : (
                              <Copy className="w-5 h-5 text-[#BFD7EA]" />
                            )}
                          </button>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-[#BFD7EA] font-['Inter']" style={{ fontWeight: 600 }}>
                          Bank Name
                        </span>
                        <span className="text-[#FAF9F6] font-['Inter'] text-right">
                          {account.bank}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Copy Button */}
                  <Button
                    onClick={() => copyToClipboard(account.accountNumber, account.name)}
                    className="w-full bg-[#0E1E3A] hover:bg-[#1E2A38] text-[#FAF9F6] font-['Inter'] uppercase tracking-wider"
                    style={{ fontWeight: 600 }}
                  >
                    {copiedAccount === account.name ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 mr-2" />
                        Copied to Clipboard!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 mr-2" />
                        Copy Account Number
                      </>
                    )}
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <Card className="p-8 bg-[#FAF9F6] border-2 border-[#9DB8A0]">
            <div className="flex items-start gap-4">
              <div className="bg-[#9DB8A0] p-3 rounded-lg flex-shrink-0">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 
                  className="text-[#0E1E3A] font-['Playfair_Display'] mb-2"
                  style={{ fontSize: '1.25rem', fontWeight: 600 }}
                >
                  After Your Transfer
                </h4>
                <p className="text-[#2E2E2E] font-['Inter'] leading-relaxed mb-3">
                  Thank you for your generous giving! Your contribution helps us spread the Gospel, 
                  support our community, and empower ministries that change lives.
                </p>
                <p className="text-[#2E2E2E] font-['Inter'] leading-relaxed">
                  For any questions about your donation or to receive a giving receipt, please contact us at{' '}
                  <a 
                    href="mailto:info.thecornerstone@gmail.com"
                    className="text-[#F5B301] hover:underline"
                    style={{ fontWeight: 600 }}
                  >
                    info.thecornerstone@gmail.com
                  </a>
                  {' '}or call{' '}
                  <a 
                    href="tel:+2347065611181"
                    className="text-[#F5B301] hover:underline"
                    style={{ fontWeight: 600 }}
                  >
                    +234 706 561 1181
                  </a>
                  .
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Scripture Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 bg-[#FAF9F6] rounded-xl p-8 text-center"
        >
          <p 
            className="text-[#0E1E3A] font-['Playfair_Display'] italic mb-3"
            style={{ fontSize: '1.25rem' }}
          >
            "Every man according as he purposeth in his heart, so let him give; 
            not grudgingly, or of necessity: for God loveth a cheerful giver."
          </p>
          <p className="text-[#F5B301] font-['Inter']" style={{ fontWeight: 600 }}>
            — 2 Corinthians 9:7
          </p>
        </motion.div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-8"
        >
          <Link to="/">
            <Button
              variant="outline"
              className="border-2 border-[#FAF9F6] text-[#FAF9F6] hover:bg-[#FAF9F6] hover:text-[#0E1E3A] font-['Inter'] px-8 uppercase tracking-wider"
              style={{ fontWeight: 600 }}
              onClick={() => {
                // Scroll to giving section after navigation
                setTimeout(() => {
                  const givingSection = document.getElementById('giving');
                  if (givingSection) {
                    givingSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              }}
            >
              ← Back to Giving
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}